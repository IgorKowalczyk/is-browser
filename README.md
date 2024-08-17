![Is browser](https://github.com/IgorKowalczyk/is-browser/assets/49127376/6a992917-80fd-4268-9f26-29e3740f2588)

<div align="center">
 <a aria-label="Github License" href="https://github.com/igorkowalczyk/is-browser/blob/main/license.md">
  <img src="https://img.shields.io/github/license/igorkowalczyk/is-browser?color=%2334D058&logo=github&style=flat-square&label=License"/>
 </a>
 <a aria-label="NPM Version" href="https://npmjs.com/package/@igorkowalczyk/is-browser">
  <img src="https://img.shields.io/npm/v/%40igorkowalczyk%2Fis-browser/latest.svg?logo=npm&logoColor=fff&style=flat-square&color=%2334D058"/>
 </a>
 <a aria-label="NPM Downloads" href="https://npmjs.com/package/@igorkowalczyk/is-browser">
  <img src="https://img.shields.io/npm/dw/@igorkowalczyk/is-browser?logo=npm&logoColor=fff&style=flat-square&color=%2334D058&label=Downloads"/>
 </a>
</div>

---

## 📥 Installation

**Tailwind.css v3 or newer is required**.

```
npm install @igorkowalczyk/is-browser
yarn add @igorkowalczyk/is-browser
pnpm add @igorkowalczyk/is-browser
```

## 📦 Usage

Add to `plugins` in your **tailwind.config.js**:

```js
module.exports = {
 // ...
 plugins: [
  require("@igorkowalczyk/is-browser"),
  // ...other plugins.
 ],
};
```

Style your components using `{browser_name}:{class}`, e.g. `firefox:bg-red-100`, `chrome:bg-blue-100`, etc.

```jsx
<div className="firefox:bg-red-400 chrome:bg-blue-400 bg-yellow-400">
 <p>On firefox background should be red, on chrome should be blue and on other browsers it should be yellow</p>
</div>
```

## 🔐 Supported browsers

| Browser | Variant    | CSS Property                         | Example                 |
| ------- | ---------- | ------------------------------------ | ----------------------- |
| Firefox | `firefox:` | `-moz-appearance: none`              | `firefox:bg-yellow-400` |
| Chrome  | `chrome:`  | `background: -webkit-named-image(i)` | `chrome:bg-red-400`     |
| Safari  | `safari:`  | `-webkit-app-region: inherit`        | `safari:bg-blue-400`    |

## ⁉️ Issues

If you come across any errors or have suggestions for improvements, please create a [new issue here](https://github.com/igorkowalczyk/is-browser/issues) and describe it clearly.

## 📥 Pull Requests

When submitting a pull request, please follow these steps:

- Clone [this repository](https://github.com/igorkowalczyk/is-browser) `https://github.com/igorkowalczyk/is-browser.git`
- Create a branch from `main` and give it a meaningful name (e.g. `my-awesome-new-feature`).
- Open a [pull request](https://github.com/igorkowalczyk/is-browser/pulls) on [GitHub](https://github.com/) and clearly describe the feature or fix you are proposing.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/is-browser/blob/main/license.md) file for details
