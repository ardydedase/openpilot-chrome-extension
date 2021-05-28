import './content_script.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AutotraderCa, AutotraderCom } from './websites';
import { getSupportDetails, getReferenceLink } from './car_support';
import { ModelParser } from './model_parser';
import { SupportDetailsInterface } from './interface';
import { SupportedCarUrl } from './constants';

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});

const openPilotBadge = (supportDetails: SupportDetailsInterface) => {
  return (<div className="openpilot-badge">openpilot
    <div className="tooltiptext">
      <div>Make: {supportDetails.make}</div>
      <div>Model: {supportDetails.model}</div>
      <div>Supported package: {supportDetails.supportedPackage}</div>
      <div dangerouslySetInnerHTML={{__html: `ACC: ${supportDetails.acc}`}}></div>
      <div>Compatibility: {supportDetails.compatibility}</div>
      <div><a href={`${getReferenceLink(supportDetails.compatibility)}`} target="_blank">Reference</a></div>
    </div>
  </div>)
};

const observer = new MutationObserver((mutations) => {
  if (mutations.length > 0) {
    let website;
    // TODO: add factory
    const baseUrl  = window.location.origin.toString();
    if (baseUrl.includes(SupportedCarUrl.AUTOTRADER_CA)) {
      website = new AutotraderCa();
    } else if (baseUrl.includes(SupportedCarUrl.AUTOTRADER_COM)) {
      website = new AutotraderCom();
    }

    if (website) {
      const supportedModelElts = website?.getElementsToUpdate();    
      if (supportedModelElts.length > 0) {
        for (var i = 0, l = supportedModelElts.length; i < l; i++) {
          const targetElt = document.createElement('span');
          const modelInfo = website.getModelInfo(supportedModelElts[i]);
          const modelParser = new ModelParser(modelInfo);
          const year = modelParser.getYear();
          const model = modelParser.getModel();
          const supportDetails = getSupportDetails(model, year);
          targetElt.innerText = 'openpilot supported';
          website.getMakeModelElement(supportedModelElts[i]).appendChild(targetElt);
          ReactDOM.render(openPilotBadge(supportDetails), website.getMakeModelElement(supportedModelElts[i]).getElementsByTagName('span')[0]);
          // supportedModelElts[i].querySelectorAll('[data-cmp=subheading]')[0].appendChild(targetElt);
          // ReactDOM.render(openPilotBadge(supportDetails), supportedModelElts[i].querySelectorAll('[data-cmp=subheading]')[0].getElementsByTagName('span')[0]);
        }
      }
    }
  }
});
observer.observe(document, { childList: true, subtree: true, attributes: true });