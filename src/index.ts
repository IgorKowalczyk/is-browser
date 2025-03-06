import createPlugin from "tailwindcss/plugin";

/* eslint-disable func-names */
const isBrowser = createPlugin(function ({ addVariant }) {
 addVariant("firefox", "@supports (-moz-appearance: none)");
 addVariant("safari", "@supports (background: -webkit-named-image(i))");
 addVariant("chrome", "@supports (-webkit-app-region: inherit)");
}) as ReturnType<typeof createPlugin>; // So rollup can infer the return type

export default isBrowser;
