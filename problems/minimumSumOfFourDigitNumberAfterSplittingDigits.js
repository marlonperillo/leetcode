/**
 * @param {number} num
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const minimumSum = (num) => {
  const arr = `${num}`.split('');
  arr.sort((a, b) => a - b);

  return parseInt(`${arr[0]}${arr[2]}`, 10) + parseInt(`${arr[1]}${arr[3]}`, 10);
};
