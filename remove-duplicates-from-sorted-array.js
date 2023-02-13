/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
*/

var removeDuplicates = function(nums) {
      const map = new Map();
      for (let i = 0; i < nums.length; i++){
        if (nums[i] !== '_' && !map.get(nums[i])){
            map.set(nums[i], 1);
        }
        else if (map.get(nums[i])){
            nums.splice(i,1);
            i--;
        }   
      }
      return nums.length;
};

console.log(removeDuplicates([1,1,2]))
