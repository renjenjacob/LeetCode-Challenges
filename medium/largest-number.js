//Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
//Since the result may be very large, so you need to return a string instead of an integer.

//Examples

//Input: nums = [10,2]
//Output: "210"

//Input: nums = [3,30,34,5,9]
//Output: "9534330"

//Constraints:
//1 <= nums.length <= 100
//0 <= nums[i] <= 109

//Solution

var largestNumber = function(nums) {
    if( nums.length == 0 ) {
        return '';
    }

    let numbers = [];

    for( let i = 0; i < nums.length; i++ ) {
        numbers.push(nums[i].toString());
    }

    numbers.sort(function (x, y) {
        return x + y > y + x ? -1 : 1;
    });

    let ans = '';

    for( i = 0; i < numbers.length; i++ ){
        ans += numbers[i];
    }

    return ans[0] == '0' ? '0' : ans;
}


