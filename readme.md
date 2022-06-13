<img width="170" height="170" align="left" style="float: left; margin: 0 10px 0 0; border-radius: 50%;" alt="Tailwindcss" src="https://raw.githubusercontent.com/IgorKowalczyk/is-firefox/main/src/images/logo.svg">

# Is :Firefox

🦊 🦊 Add support for `firefox:` variant in Tailwind.css 
<br><br><br>

---

## 📥 Installation

**Node.js v7.7.3 or newer is required**.

```
npm install @igorkowalczyk/is-firefox
yarn add @igorkowalczyk/is-firefox
pnpm add @igorkowalczyk/is-firefox
```

## 📦 Examples


#### In [Tailwind.css config](https://tailwindcss.com/docs/configuration)
```js
plugins: [
 ...
 require("@igorkowalczyk/is-firefox")
 ...
]

```
#### In `.jsx` file
```jsx
...

return (
 <div className="firefox:bg-red-100 bg-blue-100">
  <p>On firefox background should be red, on other browsers it should be blue</p>
 </div>
)

...
```

## ⁉️ Issues

If you have any issues with the page please create [new issue here](https://github.com/igorkowalczyk/is-firefox/issues)

## 📥 Pull Requests

When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/is-firefox/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/is-firefox/blob/master/license.md) file for details
