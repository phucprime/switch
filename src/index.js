import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Switch } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Switch />
  </StrictMode>,
  rootElement
);
