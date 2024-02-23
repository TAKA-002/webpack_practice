import React from "react";
import { createRoot } from "react-dom/client";
import Alert from "./Alert.tsx";

const App = () => {
  return (
    <div>
      Hello, React!!!
      <Alert message="success!!" />
    </div>
  );
};

const container = document.getElementById("react-root");
if (container) {
  createRoot(container).render(<App />);
} else {
  console.log("No react-root element found.");
}
