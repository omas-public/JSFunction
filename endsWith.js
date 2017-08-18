/**
 * Determines if it ends with.
 *
 * @param      {String}  str           The string
 * @param      {String}  searchString  The search string
 * @return     {Boolean}  True if ends with, False otherwise.
 */
const endsWith = (str, searchString) => {
  let buf = '';
  let start = str.length - searchString.length;
  for (var i = start; i < str.length; i++) {
    buf += str[i];
  }
  return buff === searchString;
};

console.assert(endsWith('Hello World', 'World') === true);
