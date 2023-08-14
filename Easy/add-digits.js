//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

//Examples

//Input: num = 38
//Output: 2
//Explanation: The process is
//38 --> 3 + 8 --> 11
//11 --> 1 + 1 --> 2 
//Since 2 has only one digit, return it.

//Input: num = 0
//Output: 0

//Constraints:
//0 <= num <= 231 - 1

//Solution

var addDigits = function(num) {
    return 1 + (num - 1) % 9;
}

