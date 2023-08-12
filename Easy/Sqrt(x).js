//Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
//You must not use any built-in exponent function or operator. For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

//Examples

//Input: x = 4
//Output: 2
//Explanation: The square root of 4 is 2, so we return 2.

//Input: x = 8
//Output: 2
//Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

//Constraints:
//0 <= x <= 231 - 1

//Solutions

var mySqrt = function(x) {
    const result = Math.floor(Math.sqrt(x));
    return result
}

var mySqrt = function(x) {
    let sqrt = 1
    let result = 0
    while(sqrt*sqrt <= x){
        result = sqrt
        sqrt++
    }

    return result
}


