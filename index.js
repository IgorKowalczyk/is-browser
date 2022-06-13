import { plugin } from "tailwindcss/plugin";

module.exports = plugin(function ({ addVariant, e, postcss }) {
 addVariant("firefox", ({ container, separator }) => {
  const isFirefox = postcss.atRule({
   name: "-moz-document",
   params: "url-prefix()",
  });
  isFirefox.append(container.nodes);
  container.append(isFirefox);
  isFirefox.walkRules((rule) => {
   rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
  });
 });
});
