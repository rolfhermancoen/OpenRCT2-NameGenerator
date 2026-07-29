// Set build configuration for unit tests.
// Options: development, production
global.__BUILD_CONFIGURATION__ = "production";

// Injected by rollup in a real build, see rollup.config.js.
global.__PLUGIN_VERSION__ = require("../package.json").version;
