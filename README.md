Ссылка на приложение: https://brave-tz.vercel.app/

Задача №1

```js
function func(string, a, b) {
  let aIndex = -1;
  let bIndex = -1;

  for (let i = string.length - 1; i>0; i--) {
    if (string[i] === a) {
      aIndex = i;
    }
    if (string[i] === b) {
      bIndex = i;
    }
  }
  return Math.max(aIndex, bIndex);
}
```
