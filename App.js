import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "123", className: "h1" },
  "Hello World from React!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child", key: 1 }, [
    React.createElement(
      "h1",
      { className: "heading_1", key: 1 },
      "Checking react-parcel bundler"
    ),
    React.createElement(
      "h2",
      { className: "heading_2", key: 2 },
      "I'm h1 tag!"
    ),
  ])
);

console.log(parent); // JS Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // passing react element into render where it converts it to "h1" tag and puts it on to DOM
