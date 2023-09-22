//Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
//If the fractional part is repeating, enclose the repeating part in parentheses.
//If multiple answers are possible, return any of them.
//It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

//Examples

//Input: numerator = 1, denominator = 2
//Output: "0.5"

//Input: numerator = 2, denominator = 1
//Output: "2"

//Input: numerator = 4, denominator = 333
//Output: "0.(012)"

//Constraints:
//-231 <= numerator, denominator <= 231 - 1
//denominator != 0

//Solution

var fractionToDecimal = function (numerator, denominator) {
    let result = '';
    var sign = '';
//    Initialize sign 
    if (numerator * denominator < 0) {
        var sign = '-';
    }
//     Convert to absolute value
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    let remainder = numerator % denominator;
//     When two numbers are exactly divisible
    if (remainder === 0) {
        return sign+numerator / denominator;
    }
    // Record the remainder
    let remainderarr = [];
    // Until you get the same remainder
    while (!remainderarr.includes(remainder)) {
        remainderarr.push(remainder);
        let n = Math.floor(remainder * 10 / Math.abs(denominator));
        remainder = remainder * 10 % Math.abs(denominator);
        result += n;
        // When the divisible
        if (remainder === 0) {
            return sign + Math.floor(numerator / denominator) + '.' + result;
        }
    }
//     Look for the loop part
    let index = remainderarr.indexOf(remainder);
    result = result.slice(0, index) + '(' + result.slice(index) + ')';
    return sign + Math.floor(numerator / denominator) + '.' + result;
}


