//You are given a string s consisting of lowercase English letters.
//A duplicate removal consists of choosing two adjacent and equal letters and removing them.
//We repeatedly make duplicate removals on s until we no longer can.
//Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

//Examples

//Input: s = "abbaca"
//Output: "ca"

//Input: s = "azxxzy"
//Output: "ay"

//Constraints:
//1 <= s.length <= 105
//s consists of lowercase English letters.

//Solution

var removeDuplicates = function(s) {
	let res = [s[0]];
	for (let i=1; i<s.length; i++) {
		if (s[i] === res[res.length-1]) res.pop();
		else res.push(s[i])
	}
	return res.join('');
}

