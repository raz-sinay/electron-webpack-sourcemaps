const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const packageJson = require("./package.json");
module.exports = function (config) {
  config.externals = [...config.externals, "react", "react-dom"];
  config.devtool = "source-map";
  config.plugins.push(
    new SentryWebpackPlugin({
      authToken: "MY_AUTH_TOKEN",
      org: "MY_ORG",
      project: "electron-source-maps",
      release: "0.0.5",
      // webpack-specific configuration
      include: ".",
      debug: true,
      validate: true,
    })
  );
  return config;
};
