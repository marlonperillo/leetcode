/**
 * @param {string} s
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
const reverseWords = (s) => {
  const sTrimmed = s.replace(/  +/g, ' ');

  const words = sTrimmed.trim().split(' ');

  // console.log(words)
  return words.reverse().reduce((a, b) => `${a} ${b}`, '').trim();
};
