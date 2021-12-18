<div align="center">
   <h1>is-img</h1>
</div>

---

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install is-img
yarn add is-img
pnpm add is-img
```

## Example

```js
const isImg = require('is-img');

isImg('./path/to/image/file.png').then(boolean => console.log(boolean));
isImg('image url').then(boolean => console.log(boolean));
```