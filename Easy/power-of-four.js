//Given an integer n, return true if it is a power of four. Otherwise, return false.
//An integer n is a power of four, if there exists an integer x such that n == 4x.

//Examples

//Input: n = 16
//Output: true

//Input: n = 5
//Output: false

//Input: n = 1
//Output: true

//Constraints:
//-231 <= n <= 231 - 1

//Solution

var isPowerOfFour = function(n) {
    if (n < 1) return false
    for(let i = 0; i <= n; i++) {
        let num = Math.pow(4, i)
        if (num === n) {
            return true
        }
        if (num > n) {
            return false
        }
    }
}


