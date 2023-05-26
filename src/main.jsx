import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CryptoProvider } from "./context/crypto-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CryptoProvider>
    <App />
  </CryptoProvider>
);
