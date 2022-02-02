/**
 * @param {number} n
 * @return {string[]}
 */
// eslint-disable-next-line no-unused-vars
const fizzBuzz = (n) => {
  const returnArray = [];
  for (let i = 1; i < 20000; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      returnArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
      returnArray.push('Fizz');
    } else if (i % 5 === 0) {
      returnArray.push('Buzz');
    } else {
      returnArray.push(`${i}`);
    }
  }
  return returnArray.slice(0, n);
};
