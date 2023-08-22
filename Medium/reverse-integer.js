//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

//Examples

//Input: x = 123
//Output: 321

//Input: x = -123
//Output: -321

//Input: x = 120
//Output: 21

//Constraints:
//-2**31 <= x <= 2**31 - 1

//Solution

var reverse = function(x) {
    let reverse = 0;
    while (x !== 0) {
      reverse = reverse * 10 + (x % 10)
      x = parseInt(x/10)
    } 
    return reverse > Math.pow(2, 31) || reverse < Math.pow(-2, 31) ? 0 : reverse;
  }

