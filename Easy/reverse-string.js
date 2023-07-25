//Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.

//Examples

//Input: s = ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]

//Input: s = ["H","a","n","n","a","h"]
//Output: ["h","a","n","n","a","H"]

//Constraints:

//1 <= s.length <= 105
//s[i] is a printable ascii character.

//Solutions

var reverseString = function(s) {
    let left = 0, right=s.length-1;
 
    while(left < right ) {
        [s[left] , s[right]] = [s[right] , s[left]];
        left++;
        right--
    } 
 
    return s
}

