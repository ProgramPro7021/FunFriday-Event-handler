import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

<<<<<<< HEAD
// Handle redirect from 404.html for GitHub Pages SPA routing
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  window.history.replaceState(null, null, redirect);
}

=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);