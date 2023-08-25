//Given a string s, find the length of the longest substring without repeating characters.

//Examples

//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.

//Input: s = "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.

//Input: s = "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.
//Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//Constraints:
//0 <= s.length <= 5 * 104
//s consists of English letters, digits, symbols and spaces.

//Solution

for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    soFar[rightChar] = soFar[rightChar] + 1 || 1;

    while(soFar[rightChar] > 1) {
        let leftChar = s[windowStart];

        if(soFar[leftChar] > 1) {
            soFar[leftChar]--;
        } else {
            delete soFar[leftChar];
        }

        windowStart++
    }
    max = Math.max(max, (windowEnd - windowStart) + 1)
}
return max;
};