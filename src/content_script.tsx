import { officalCars } from './offical_cars';

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
  const carImages = document.getElementsByClassName('imgVehicleContainer');
  for (var i = 0, l = carImages.length; i < l; i++) {
    const commaLogo = document.createElement('b');
    commaLogo.innerText = 'comma supported';
    carImages[i].appendChild(commaLogo);
  }
}