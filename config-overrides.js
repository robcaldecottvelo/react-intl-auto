const { override, useBabelRc, addBundleVisualizer } = require("customize-cra");

module.exports = override(useBabelRc(), addBundleVisualizer({}, true));
