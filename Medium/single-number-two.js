//Given an integer array nums where every element appears three times except for one, which appears exactly once. 
//Find the single element and return it.
//You must implement a solution with a linear runtime complexity and use only constant extra space.

//Examples

//Input: nums = [2,2,3,2]
//Output: 3

//Input: nums = [0,1,0,1,0,1,99]
//Output: 99

//Constraints:
//1 <= nums.length <= 3 * 104
//-231 <= nums[i] <= 231 - 1
//Each element in nums appears exactly three times except for one element which appears once.

//Solution

function singleNumber(nums) {
    nums.sort((x, y) => x - y);

    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
}

