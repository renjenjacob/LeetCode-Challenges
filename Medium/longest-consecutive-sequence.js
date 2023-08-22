//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
//You must write an algorithm that runs in O(n) time.

//Examples

//Input: nums = [100,4,200,1,3,2]
//Output: 4
//Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

//Input: nums = [0,3,7,2,5,8,4,6,0,1]
//Output: 9

//Constraints:
//0 <= nums.length <= 105
//-109 <= nums[i] <= 109

//Solution

var longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let temp = 1;
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 1;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1] - 1) {
            temp++;
            count = Math.max(count, temp);
        } else if (nums[i] === nums[i + 1]) {
            count = Math.max(count, temp);
        } else {
            temp = 1;
            count = Math.max(count, temp);
        }
    }
    return count;
}


