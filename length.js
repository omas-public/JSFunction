/**
 * 文字列の長さを返す
 * @param  {String} s [文字列]
 * @return {Number}   [文字数]
 */
const length = s => Array.from(s).reduce((len, _) => len = len + 1, 0)

console.assert(length('') === 0, 'NG');
console.assert(length('abc') === 3, 'NG');
