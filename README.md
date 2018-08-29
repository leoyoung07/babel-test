# babel-plugin-babel-test



## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-babel-test
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-test"]
}
```

### Via CLI

```sh
$ babel --plugins babel-test script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-test"]
});
```
