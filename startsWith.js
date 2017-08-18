/**
 * Determines if it starts with.
 *
 * @param      {string}   str           The string
 * @param      {string}   searchString  The search string
 * @return     {boolean}  True if starts with, False otherwise.
 */
const startsWith = (str, searchString) => {
  let buf = '';
  for (var i = 0; i < searchString.length; i++) {
    buf += str[i];
  }
  return buf === searchString;
};

console.assert(startsWith('Hello World', 'Hello') === true);
