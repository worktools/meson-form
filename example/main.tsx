import ReactDOM from "react-dom";
import React from "react";

import { parseRoutePath } from "@worktools/ruled-router";

import { routerRules } from "./models/router-rules";

import Container from "./pages/container";

import "antd/dist/antd.min.css";
import "./main.css";

const renderApp = () => {
  let routerTree = parseRoutePath(window.location.hash.slice(1), routerRules);

  ReactDOM.render(<Container router={routerTree as any} />, document.querySelector(".app"));
};

window.onload = renderApp;

window.addEventListener("hashchange", () => {
  renderApp();
});

declare var module: any;

if (import.meta.hot) {
  import.meta.hot.accept(["./pages/container"], () => {
    renderApp();
  });
}
