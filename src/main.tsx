import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/ui/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
