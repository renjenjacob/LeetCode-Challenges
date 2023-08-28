//Given an integer array nums, return the third distinct maximum number in this array. 
//If the third maximum does not exist, return the maximum number.

//Examples

//Input: nums = [3,2,1]
//Output: 1
//Explanation:
//The first distinct maximum is 3.
//The second distinct maximum is 2.
//The third distinct maximum is 1.

//Input: nums = [1,2]
//Output: 2
//Explanation:
//The first distinct maximum is 2.
//The second distinct maximum is 1.
//The third distinct maximum does not exist, so the maximum (2) is returned instead.

//Input: nums = [2,2,3,1]
//Output: 1
//Explanation:
//The first distinct maximum is 3.
//The second distinct maximum is 2 (both 2's are counted together since they have the same value).
//The third distinct maximum is 1.

//Solution

var thirdMax = function(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
      if (nums[i] > first) {
        [first, second, third] = [nums[i], first, second];
      } else if (nums[i] > second) {
        [second, third] = [nums[i], second];
      } else if (nums[i] > third) {
        third = nums[i];
      }
    }
    return third === -Infinity ? first : third;
}


