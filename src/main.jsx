import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-screen font-sans flex justify-center items-center bg-[#ffe4c4]">
      <App />
    </div>
  </React.StrictMode>
);
