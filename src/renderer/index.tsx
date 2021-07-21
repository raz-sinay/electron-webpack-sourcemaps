import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as Sentry from "@sentry/electron";

Sentry.init({
  dsn: "MY_DSN",
  release: "electron-source-maps@0.0.7",
});

ReactDOM.render(<App />, document.getElementById("app"));
