import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";                // ✅ REQUIRED (initializes i18n)
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="434152554552-savbdo7agbrmjsgs0a2sustqk7msi131.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
