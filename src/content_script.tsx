import { officalCars } from './offical_cars';
import { Autotrader } from './websites';

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});

window.onload = function() {
  console.log('finished loading.');
  console.log('officalCars: ', officalCars);
  console.log('hostname: ', location.hostname);
  // autotrader
  let website;
  if (location.hostname.includes('autotrader.ca')) {
    website = new Autotrader();
  }
  website?.updatePage();
}