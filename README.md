# is [wiki](https://github.com/bisaek/is-module/wiki)

install:

```
npm i @bisaek/is
```

or:

```
npm install @bisaek/is
```

<br>

---

reqiure `is`

```js
const { isConfig, is } = require("is");
```

<br>

---

## code example

with `is`:

```js
if (is.month("december") || is.month("january") || is.month("february")) {
  console.log("its cold outside");
}
```

without `is`:

```js
let myDate = new Date();

if (
  myDate.getMonth() === 11 ||
  myDate.getMonth() === 0 ||
  myDate.getMonth() === 1
) {
  console.log("its cold outside");
}
```

with `is` its better because its more readable, and less. in `is` can you use string and int to write the month.

example:

```js
isConfig.month.jan = 0;

console.log(is.month("january"), "jan");
console.log(is.month(0), "jan");
```

console:

```
>node example.js
true
true
```

## [read more](https://github.com/bisaek/is-module/wiki)
