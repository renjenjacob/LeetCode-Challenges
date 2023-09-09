//Given a string s, return the number of segments in the string.
//A segment is defined to be a contiguous sequence of non-space characters.

//Examples

//Input: s = "Hello, my name is John"
//Output: 5
//Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

//Input: s = "Hello"
//Output: 1

//Constraints:
//0 <= s.length <= 300
//s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
//The only space character in s is ' '.

//Solution

var countSegments = function(s) {
    let segments = s.split(" ");
    let count = 0;
    for (let i = 0; i < segments.length; i++) {
      if (segments[i] === "") {
        continue;
      } else {
        count += 1;
      }
    }
    return count;
  }


  