import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CommonProvider } from "./context/CommonContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CommonProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CommonProvider>
  </StrictMode>
);
