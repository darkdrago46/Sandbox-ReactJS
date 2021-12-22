import React from "react";
//same as const React = require("react");
const ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1>JSX Example</h1>
    <p>This is a sample para</p>
  </div>,
  document.querySelector("#root")
);
