//We define the usage of capitals in a word to be right when one of the following cases holds:
//All letters in this word are capitals, like "USA".
//All letters in this word are not capitals, like "leetcode".
//Only the first letter in this word is capital, like "Google".
//Given a string word, return true if the usage of capitals in it is right.

//Examples

//Input: word = "USA"
//Output: true

//Input: word = "FlaG"
//Output: false

//1 <= word.length <= 100
//word consists of lowercase and uppercase English letters.

//Solution

var detectCapitalUse = function(word) {
    return (word.toUpperCase()== word || word.slice(1) == word.slice(1).toLowerCase());
}

