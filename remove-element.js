/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const nums = [3,2,2,3];
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === val){
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;    
};



console.log(removeElement(nums, 3));
console.log(nums);