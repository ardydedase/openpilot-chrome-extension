import './content_script.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Autotrader } from './websites';
import { getSupportDetails, getReferenceLink } from './utils';
import { ModelParser } from './model_parser';
import { SupportDetailsInterface } from './interface';

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
    website = new Autotrader();
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
        supportedModelElts[i].getElementsByClassName('makeModel')[0].appendChild(targetElt);
        ReactDOM.render(openPilotBadge(supportDetails), supportedModelElts[i].getElementsByClassName('makeModel')[0].getElementsByTagName('span')[0]);
      }
    }
  }
});
observer.observe(document, { childList: true, subtree: true, attributes: true });