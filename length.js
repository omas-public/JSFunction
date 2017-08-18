/**
 * 文字列の長さを返す
 * @param  {String} s [文字列]
 * @return {Number}   [文字数]
 */
const length = (s) => {
  let index = 0;
  for (;;) {
    if (!s.charAt(index++)) {
      break;
    }
  }
  return index;
};

console.assert(length('') === 0, 'NG');
console.assert(length('abc') === 3, 'NG');
