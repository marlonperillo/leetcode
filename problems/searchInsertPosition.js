/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] >= target) { return i; }
  }
  return nums.length;
};
