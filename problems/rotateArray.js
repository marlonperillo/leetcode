/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  if (nums.length === 1 || k === 0) {
    return;
  }

  if (k > nums.length) {
    k %= nums.length;
  }
  const head = nums.slice(nums.length - k);
  const tail = nums.slice(0, nums.length - k);
  let counter = 0;
  head.forEach((a) => {
    nums[counter] = a;
    counter += 1;
  });
  tail.forEach((a) => {
    nums[counter] = a;
    counter += 1;
  });
};
