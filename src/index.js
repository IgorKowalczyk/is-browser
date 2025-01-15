import plugin from "tailwindcss/plugin";

/* eslint-disable func-names */
const isBrowser = plugin(function ({ addVariant }) {
 addVariant("firefox", "@supports (-moz-appearance: none)");
 addVariant("safari", "@supports (background: -webkit-named-image(i))");
 addVariant("chrome", "@supports (-webkit-app-region: inherit)");
});

export default isBrowser;
