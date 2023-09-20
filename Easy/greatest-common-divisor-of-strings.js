//For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
//Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

//Examples

//Input: str1 = "ABCABC", str2 = "ABC"
//Output: "ABC"

//Input: str1 = "ABABAB", str2 = "ABAB"
//Output: "AB"

//Input: str1 = "LEET", str2 = "CODE"
//Output: ""

//Constraints:
//1 <= str1.length, str2.length <= 1000
//str1 and str2 consist of English uppercase letters.

//Solution

var gcdOfStrings = function(str1, str2) {
    /*check if the substrings combined share a common substring
    if they do, then the string inputs combined should look the same regardless of the order */
    if (str1 + str2 !== str2 + str1) {
        return '';
    }
    let minLength = Math.min(str1.length, str2.length);
    //start with the longest possible divisor
    for (let l = minLength; l > 0; l--) {
        //check if str1 and str2 lengths are divisable with length
        //length l represents length of substring
        if ((str1.length % l === 0) && (str2.length % l === 0)) {
                //return str1 substring up to that length
                return str1.substring(0, l);
        }
    }
}


