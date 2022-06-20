const plugin = require("tailwindcss/plugin");

module.exports = plugin(function({ addVariant }) {
 addVariant('firefox', '@-moz-document url-prefix()')
});
