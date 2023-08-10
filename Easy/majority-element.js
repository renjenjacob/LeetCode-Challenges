//Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//Examples

//Input: nums = [3,2,3]
//Output: 3

//Input: nums = [2,2,1,1,1,2,2]
//Output: 2

//Constraints:
//n == nums.length
//1 <= n <= 5 * 104
//-109 <= nums[i] <= 109

//Solution

var majorityElement = function(nums) {
    for(let i=0; i<nums.length; i++) {
        let maj = 0
        for(let j=0; j<nums.length; j++) {
            if(nums[i]===nums[j]) {
                maj++
            }
            if(maj>(nums.length/2)) {
                return nums[i]
            }
        }
    }
}


