import plugin from "tailwindcss/plugin";

const isBrowser = plugin(({ addVariant }) => {
 addVariant("firefox", "@supports (-moz-appearance: none)");
 addVariant("safari", "@supports (background: -webkit-named-image(i))");
 addVariant("chrome", "@supports (-webkit-app-region: inherit)");
});

export default isBrowser;
