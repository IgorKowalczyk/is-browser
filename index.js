const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant }) {
 addVariant("firefox", "@supports (-moz-appearance: none)");
 addVariant("safari", "@supports (background: -webkit-named-image(i))");
 addVariant("chrome", "@supports (-webkit-app-region: inherit)");
});
