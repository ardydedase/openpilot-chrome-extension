import './popup.css';
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const Popup = () => {

  const [currentURL, setCurrentURL] = useState<string>();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
    });
  }, []);
  
  const showCompatibleCars = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {},
          (msg) => {
            console.log("result message:", msg);
          }
        );
      }
    });
  };
  
  return (
    <>
    <div className="popup">
        <div><button onClick={showCompatibleCars}>Show compatible cars</button></div>
        <div>Openpilot Compatible Cars (Unofficial)</div>
        <div>Built by <a href="https://github.com/ardydedase/" target="_blank">@ardydedase</a></div>
        <div><a href="https://github.com/ardydedase/openpilot-chrome-plugin" target="_blank">Contribute on GitHub</a> to support more websites</div>
        <div><a href="https://github.com/ardydedase/openpilot-chrome-plugin/blob/master/LICENSE" target="_blank">MIT License</a></div>        
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
