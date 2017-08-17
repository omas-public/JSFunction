/**
 * 文字列から指定した文字を返します。
 * @param  {String} str   [対象文字列]
 * @param  {Number} index [インデックス]
 * @return {String}       [文字]
 */
const charAt = (str, index) => {
  return str[index];
};

console.assert(charAt('abc', 1) === 'b');