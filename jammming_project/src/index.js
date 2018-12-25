import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { AppContainer } from "./containers/AppContainer";

function Site() {
  return <AppContainer />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Site />, rootElement);
