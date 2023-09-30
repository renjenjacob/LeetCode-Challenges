/*Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'. */

//Solution

var reverseOnlyLetters = function (s) {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str = s.split('');
    let i = 0;  
    let e = str.length - 1;
    while (i < e) {  
      while (i < e && !letters.includes(str[i])) {
        i++;
      }
      while (i < e && !letters.includes(str[e])) {
        e--;
      }
  
      if (letters.includes(str[i]) && letters.includes(str[e])) {
        [str[i], str[e]] = [str[e], str[i]];
      }
  
      i++;  
      e--;
    }
  
    console.log(str.join(''));
    return str.join('');
  }


  