/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const removeDuplicates = (nums) => {
  let pointer = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i + 1]) {
      nums[pointer] = nums[i];
      pointer += 1;
    }
  }
  return pointer;
};
