/* eslint-disable no-param-reassign */
/**
 * @param {number} n
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
const isHappy = (n) => {
  const numberHistory = [];
  let happyFlag = false;

  while (!happyFlag) {
    let sum = 0;
    if (numberHistory.includes(n)) {
      break;
    } else {
      numberHistory.push(n);
    }
    while (n > 0) {
      const r = n % 10;
      n = Math.floor(n / 10);
      sum += r * r;
    }
    if (sum === 1) {
      happyFlag = true;
    }
    n = sum;
  }

  return happyFlag;
};
