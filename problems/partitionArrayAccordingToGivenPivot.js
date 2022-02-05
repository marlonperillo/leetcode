/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
const pivotArray = (nums, pivot) => {
  const less = [];
  const more = [];
  const equal = [];

  nums.forEach((a) => {
    if (a > pivot) {
      more.push(a);
    }

    if (a < pivot) {
      less.push(a);
    }

    if (a === pivot) {
      equal.push(a);
    }
  });

  nums = [...less, ...equal, ...more];
  return nums;
};
