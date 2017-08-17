/**
 * 文字列の長さを返す
 * @param  {String} s [文字列]
 * @return {Number}   [文字数]
 */
const length = (s) => {
  let count = 0;
  while (true) {
    if (s.charAt(count++) === undefined) {
      count--;
      break;
    }
  }
  return count;
};

console.assert(length('') === 0, 'NG');
console.assert(length('abc') === 3, 'NG');
