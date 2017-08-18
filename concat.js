/**
 * { 文字列を結合する }
 *
 * @param      {String}  a       { 文字列 }
 * @param      {String}  b       { 文字列 }
 * @return     {String}  { 結合した文字列 }
 */
const concat = (...args) => {
  let buf = '';
  for (let i = 0; i < args.length; i++) {
    buf += args[i];
  }
  return buf;
};
console.assert(concat('aaa', 'bbb') === 'aaabbb');
console.assert(concat('a', 'b', 'c') === 'abc');