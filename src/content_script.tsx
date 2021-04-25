import { Autotrader } from './websites';
import Badge from 'react-bootstrap/Badge';
import React from 'react';
import ReactDOM from 'react-dom';


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});

const openPilotBadge = (<Badge variant="dark">openpilot</Badge>);

const observer = new MutationObserver((mutations) => {
  if (mutations.length > 0) {
    let website;
    website = new Autotrader();
    const supportedModelElts = website?.getElementsToUpdate();
    if (supportedModelElts.length > 0) {
      for (var i = 0, l = supportedModelElts.length; i < l; i++) {
        const targetElt = document.createElement('span');
        targetElt.innerText = 'openpilot supported';
        supportedModelElts[i].getElementsByClassName('makeModel')[0].appendChild(targetElt);
        ReactDOM.render(openPilotBadge, supportedModelElts[i].getElementsByClassName('makeModel')[0].getElementsByTagName('span')[0]);
      }    
    }
  }
});
observer.observe(document, { childList: true, subtree: true, attributes: true });