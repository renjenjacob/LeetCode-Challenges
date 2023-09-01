//Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

//Examples

//Input: s = "Hello"
//Output: "hello"

//Input: s = "here"
//Output: "here"

//Input: s = "LOVELY"
//Output: "lovely"

//Constraints:
//1 <= s.length <= 100
//s consists of printable ASCII characters.

//Solutions

var toLowerCase = function(s) {
    let output = '';
    for (let i = 0; i < s.length; i++) {
        const character = s.charCodeAt(i);
        if (character >= 65 && character <= 90) {
            output += String.fromCharCode(character + 32);
        } else {
            output += s[i];
        }
    }
    
    return output;
}

var toLowerCase = function(s) {
    return s.toLowerCase();
}




