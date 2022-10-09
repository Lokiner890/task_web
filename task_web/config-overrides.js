const path = require("path");
const { alias, configPaths } = require("react-app-rewire-alias");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      // ...config.alias,
      "@": path.resolve(__dirname, "./src/*"),
    },
  };

  alias(configPaths())(config);

  return config;
};
