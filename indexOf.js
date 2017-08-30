/**
 * Searches for the first match.
 *
 * @param      {string}  str           The string
 * @param      {string}  searchString  The search string
 * @return     {number}  { index }
 */
const indexOf = (str, searchString) => {
  let strlen = str.length;
  let searchlen = searchString.length;
  for (let i = 0; i < strlen; i++) {
    if (str.charAt(i) === searchString.charAt(0)) {
      let buf = '';
      for (let j = 0; j < searchlen; j++) {
        buf += str.charAt(i + j);
      }
      if (buf === searchlen) {
        return i;
      }
    }
  }
  return -1;
};