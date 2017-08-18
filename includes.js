/**
 * { function_description }
 *
 * @param      {string}  str           The string
 * @param      {string}  searchString  The search string
 * @return     {boolean}  { description_of_the_return_value }
 */
let includes = (str, searchString) => {
  let searchlen = searchString.length;
  let strlen    = str.length - searchlen + 1;
  for (let i = 0; i < strlen; i++) {
    if (str.substr(i, searchlen) === searchString) {
      return true;
    }
  }
  return false;
};

console.assert(includes('abc', 'b') === true);
