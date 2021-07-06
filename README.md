# is

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
const is = require("@bisaek/is");
```

<br>

---

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
//its january
console.log(is.month("january"));
console.log(is.month(0));
```

console:

```
>node example.js
true
true
```
