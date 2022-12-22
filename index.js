import plugin from "tailwindcss/plugin";

export default plugin(function ({ addVariant }) {
 addVariant("firefox", "@-moz-document url-prefix()");
});
