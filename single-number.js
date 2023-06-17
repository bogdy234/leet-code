/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const frequency = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (frequency.get(nums[i])) {
      frequency.set(nums[i], 2);
    } else {
      frequency.set(nums[i], 1);
    }
  }
  let result = 0;
  frequency.forEach((value, key) => {
    if (value === 1) {
      result = key;
      return;
    }
  });
  return result;
};

console.log(singleNumber([2, 2, 1]));
