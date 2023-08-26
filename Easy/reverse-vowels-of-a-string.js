//Given a string s, reverse only all the vowels in the string and return it.
//The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

//Examples

//Input: s = "hello"
//Output: "holle"

//Input: s = "leetcode"
//Output: "leotcede"

//Constraints:
//1 <= s.length <= 3 * 105
//s consist of printable ASCII characters.

//Solution

var reverseVowels = function (s) {
    let pointer = s.length - 1;     // Create A Pointer Which Is Start From End Of The Array.
    let ansStr = s.split("");   // Convert String To Array That Will More Easy To Solve This Problem.
    let i = 0;      // Create A I Veriable That Start From Array Index Of 0
     var voewls = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];  // Create a All Vowels That Will Help To Check The Value Is Vowel Or Not.
    // You can use regex like: /[a|e|i|o|u]/gi
    while (i < pointer) {   // Check Condition That I Should Be Less Then Pointer This Condition Devide The Time Complexity To O(N) To O(LogN).

        if (voewls.includes(ansStr[i]) && voewls.includes(ansStr[pointer])) {   // Here we check the condition that our I possition value and Pointer possition value should be vowel
            let tmp = ansStr[i];    // If condition is true then swap this possition value respectively you can create a extra swap function.
            ansStr[i++] = ansStr[pointer];
            ansStr[pointer--] = tmp;
        } else {
            if (voewls.includes(ansStr[i])) {   // If the Ith possition value is vowel then we decrement the Pointer Possition value to -1;
                pointer--;
            } else {
                i++;    // If the Ith possition value does not a vowel then increment the Ith possition by +1
            }
        }
    }
    return ansStr.join("");     // Here we convert the array to string
}


