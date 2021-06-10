import './content_script.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AutotraderCa, CurbieCa } from './websites';
import { getSupportDetails, getReferenceLink } from './car_support';
import { ModelParser } from './model_parser';
import { SupportDetailsInterface } from './interface';
import { SupportedCarUrl } from './constants';

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

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  let website: any;
  // TODO: add factory
  const baseUrl = window.location.origin.toString();
  if (baseUrl.includes(SupportedCarUrl.AUTOTRADER_CA)) {
    website = new AutotraderCa();
  } else if (baseUrl.includes(SupportedCarUrl.CURBIE_CA)) {
    website = new CurbieCa();
  }
  const supportedModelElts = website?.getElementsToUpdate();
  if (supportedModelElts.length > 0) {
    for (var i = 0, l = supportedModelElts.length; i < l; i++) {
      const modelInfo = website.getModelInfo(supportedModelElts[i]);
      const modelParser = new ModelParser(modelInfo);
      const year = modelParser.getYear();
      const model = modelParser.getModel();
      const supportDetails = getSupportDetails(model, year);
      const targetElt = document.createElement('span');
      targetElt.innerText = 'openpilot supported';
      website.getMakeModelElement(supportedModelElts[i]).appendChild(targetElt);
      ReactDOM.render(openPilotBadge(supportDetails), website.getMakeModelElement(supportedModelElts[i]).getElementsByTagName('span')[0]);
    }
  }
});