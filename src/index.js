import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavbarComponent from "./components/navbar/navbar";
import RouterComponent from "./routes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavbarComponent />
    <RouterComponent />
  </BrowserRouter>
);
