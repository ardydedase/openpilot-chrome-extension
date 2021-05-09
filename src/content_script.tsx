import './content_script.css';
import Badge from 'react-bootstrap/Badge';
import React from 'react';
import ReactDOM from 'react-dom';
import { Autotrader } from './websites';
import { getYear, getModel, getSupportDetails } from './utils';
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
  return (<Badge variant="dark">openpilot
    <div className="tooltiptext">
      <div>Make: {supportDetails.make}</div>
      <div>Model: {supportDetails.model}</div>
      <div>Supported package: {supportDetails.supportedPackage}</div>
      <div dangerouslySetInnerHTML={{__html: `ACC: ${supportDetails.acc}`}}></div>
    </div>
  </Badge>)
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
        const year = getYear(modelInfo);
        const model = getModel(modelInfo);
        const supportDetails = getSupportDetails(model, year);
        targetElt.innerText = 'openpilot supported';
        supportedModelElts[i].getElementsByClassName('makeModel')[0].appendChild(targetElt);
        ReactDOM.render(openPilotBadge(supportDetails), supportedModelElts[i].getElementsByClassName('makeModel')[0].getElementsByTagName('span')[0]);
      }
    }
  }
});
observer.observe(document, { childList: true, subtree: true, attributes: true });