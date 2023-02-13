/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const index = map.get(target - nums[i]);
    if (typeof index !== "undefined") {
      return [index, i];
    }

    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
