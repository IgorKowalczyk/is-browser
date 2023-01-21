<img width="170" height="170" align="left" style="float: left; margin: 0 10px 0 0; border-radius: 50%;" alt="Tailwindcss" src="https://raw.githubusercontent.com/IgorKowalczyk/is-browser/main/src/images/logo.svg">

# Tailwind is `:browser`

🏔️ Add support for browser specific variants in Tailwind.css
<br><br><br>

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

If you have any issues with the page please create [new issue here](https://github.com/igorkowalczyk/is-browser/issues)

## 📥 Pull Requests

When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/is-browser/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/is-browser/blob/master/license.md) file for details
