//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//For example, 2 is written as II in Roman numeral, just two ones added together. The number 27 is written as XXVII, which is XX + V + II.
//Given a roman numeral, convert it to an integer.

//Examples

//Input: s = "III"
//Output: 3
//Explanation: III = 3.

//Input: s = "LVIII"
//Output: 58
//Explanation: L = 50, V= 5, III = 3.

//Input: s = "MCMXCIV"
//Output: 1994
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

//Constraints:

//1 <= s.length <= 15
//s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//It is guaranteed that s is a valid roman numeral in the range [1, 3999].

//Solution

var romanToInt = function(s) {
    let map = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
    let result = 0;
    for(let i=0; i<s.length; i++) {
        let curr = map[s[i]]
        let next = map[s[i+1]]
        if(curr < next) {
            result += next-curr
            i++
        } else {
            result += curr
        }
    }
    return result
}


