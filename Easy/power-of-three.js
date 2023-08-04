//Given an integer n, return true if it is a power of three. Otherwise, return false.
//An integer n is a power of three, if there exists an integer x such that n == 3x.

//Examples

//Input: n = 27
//Output: true
//Explanation: 27 = 33

//Input: n = 0
//Output: false
//Explanation: There is no x where 3x = 0.

//Input: n = -1
//Output: false
//Explanation: There is no x where 3x = (-1).

//Constraints:
//-231 <= n <= 231 - 1

//Solution

var isPowerOfThree = function (n) {
    if (n < 1) return false;
  
    while (n % 3 === 0) {
      n /= 3;
    }
  
    return n === 1;
}


