//Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
//If target is not found in the array, return [-1, -1].
//You must write an algorithm with O(log n) runtime complexity.

//Examples

//Input: nums = [5,7,7,8,8,10], target = 8
//Output: [3,4]

//Input: nums = [5,7,7,8,8,10], target = 6
//Output: [-1,-1]

//Input: nums = [], target = 0
//Output: [-1,-1]

//Constraints:
//0 <= nums.length <= 105
//-109 <= nums[i] <= 109
//nums is a non-decreasing array.
//-109 <= target <= 109

//Solution

var searchRange = function(nums, target) {
    let ans = [-1, -1];
    let start = 0, end = nums.length - 1, mid;
    // First occurrence
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target == nums[mid]) {
            ans[0] = mid;
            end = mid - 1;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    // Last occurrence
    start = 0;
    end = nums.length - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target == nums[mid]) {
            ans[1] = mid;
            start = mid + 1;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
}


