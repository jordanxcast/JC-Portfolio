import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import PortfolioContextProvider from "./PortfolioContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

ReactDOM.render(
  <BrowserRouter>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
