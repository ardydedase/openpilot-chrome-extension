import React from "react";
import ReactDOM from "react-dom";

export const Popup = () => {
  return (
    <>
      <div style={{ minWidth: "300px" }}>
        <div>Openpilot Compatible Cars (Unofficial)</div>
        <div>Built by <a href="https://github.com/ardydedase/" target="_blank">@ardydedase</a></div>
        <div>Curently works on autotrader.ca</div>
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
