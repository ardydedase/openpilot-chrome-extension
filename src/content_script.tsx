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
  const carCell = document.getElementsByClassName('topSeller');
  for (var i = 0, l = carCell.length; i < l; i++) {
    const commaLogo = document.createElement('b');
    commaLogo.innerText = 'comma supported';
    console.log('carCell title: ', carCell[i].getElementsByClassName('makeModel')[0].textContent);
    carCell[i].getElementsByClassName('imgVehicleContainer')[0].appendChild(commaLogo);
  }
}