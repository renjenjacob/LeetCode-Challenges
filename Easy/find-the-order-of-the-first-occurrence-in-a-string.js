//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

//Examples

//Input: haystack = "sadbutsad", needle = "sad"
//Output: 0
//Explanation: "sad" occurs at index 0 and 6.
//The first occurrence is at index 0, so we return 0.

//Input: haystack = "leetcode", needle = "leeto"
//Output: -1
//Explanation: "leeto" did not occur in "leetcode", so we return -1.

//Constraints:
//1 <= haystack.length, needle.length <= 104
//haystack and needle consist of only lowercase English characters.

//Solution

var strStr = function(haystack, needle) {
    let n = needle.length;
    let m = haystack.length;
    let search_space = m - n + 1;
    for (let i = 0; i < search_space; i++) {
        let temp = haystack.substring(i, n + i);
        if (temp === needle) {
            return i;
        }
    }
    return -1;
}

