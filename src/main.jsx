import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";               
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="638900978404-5ba09sdfkdpjd4q5bp8fejhqr0k135t9.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
