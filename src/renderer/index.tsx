import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as Sentry from "@sentry/electron";

Sentry.init({
  dsn: "my_dsn",
  release: "0.0.5",
});

ReactDOM.render(<App />, document.getElementById("app"));
