//Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
//A shift on s consists of moving the leftmost character of s to the rightmost position.

//Examples

//Input: s = "abcde", goal = "cdeab"
//Output: true

//Input: s = "abcde", goal = "abced"
//Output: false

//Constraints:
//1 <= s.length, goal.length <= 100
//s and goal consist of lowercase English letters.

//Solution

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    return s.concat(s).includes(goal);
}


