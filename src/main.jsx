import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import initI18n from "./i18n";
import "../src/index.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

initI18n().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
