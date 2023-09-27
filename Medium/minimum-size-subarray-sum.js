//Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target.
//If there is no such subarray, return 0 instead.

//Examples

//Input: target = 7, nums = [2,3,1,2,4,3]
//Output: 2
//Explanation: The subarray [4,3] has the minimal length under the problem constraint.

//Input: target = 4, nums = [1,4,4]
//Output: 1

//Input: target = 11, nums = [1,1,1,1,1,1,1,1]
//Output: 0

//Constraints:
//1 <= target <= 109
//1 <= nums.length <= 105
//1 <= nums[i] <= 104

//Solution

var minSubArrayLen = function(target, nums) {
    
    let minLength = Infinity; // Initialize the minimum length as positive infinity

    let sum = 0; // Variable to track the current sum
    
    let left = 0; // Pointer for the left end of the subarray
    
    for (let right = 0; right < nums.length; right++) {
        
        sum += nums[right]; // Add the current element to the sum
        
        while (sum >= target) {
            
            minLength = Math.min(minLength, right - left + 1); // Update the minimum length
            sum -= nums[left]; // Remove the leftmost element from the sum
            left++; // Move the left pointer to the right
        }
    }
    return minLength === Infinity ? 0 : minLength; // Return 0 if no subarray is found
}


