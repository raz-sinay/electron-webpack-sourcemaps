const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const packageJson = require("./package.json");
module.exports = function (config) {
  config.externals = [...config.externals, "react", "react-dom"];
  config.devtool = "source-map";
  config.plugins.push(
    new SentryWebpackPlugin({
      authToken: "AUTH_TOKEN",
      org: "ORGANIZATION",
      project: "electron-source-maps",
      release: "electron-source-maps@0.0.7",
      // webpack-specific configuration
      include: ".",
      ignore: ["custom.webpack.additions.js", "node_modules"],
      debug: true,
      validate: true,
    })
  );
  return config;
};
