/**
 * { function_description }
 *
 * @param      {string}  str           The string
 * @param      {string}  searchString  The search string
 * @return     {boolean}  { description_of_the_return_value }
 */
const includes = (str, searchString) => {
  let searchlen = searchString.length;
  let strlen    = str.length - searchlen + 1;
  for (let i = 0; i < strlen; i++) {
    if (str.charAt(i) === searchString.charAt(0)) {
      let buf = '';
      for (let j = 0; j < searchlen; j++) {
        buf += str.charAt(i + j);
      }
      if (buf === searchString) {
        return true;
      }
    }
  }
  return false;
};

console.assert(includes('abc', 'b') === true);
