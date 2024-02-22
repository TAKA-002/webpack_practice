import ReactDom from "react-dom";
import React from "react";

const App = () => {
  return <div>Hello, React!!!</div>;
};

const root = document.getElementById("react-root");
if (root) {
  ReactDom.render(<App />, root);
} else {
  console.log("No react-root element found.");
}
