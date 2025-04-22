import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

const node = document.getElementById("root");
console.log("node : " + node);
const root = createRoot(node);
root.render(<App />);
