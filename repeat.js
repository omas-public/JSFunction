/**
 * { function_description }
 *
 * @param      {string}  str     The string
 * @param      {number}  count   The count
 * @return     {string}  { description_of_the_return_value }
 */
const repeat = (str, count) => {
  let buf = '';
  for (let i = 0; i < count; i++) {
    buf += str;
  }
  return buf;
};


