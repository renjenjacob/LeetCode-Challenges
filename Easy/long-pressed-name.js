//Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
//You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

//Examples

//Input: name = "alex", typed = "aaleex"
//Output: true
//Explanation: 'a' and 'e' in 'alex' were long pressed.

//Input: name = "saeed", typed = "ssaaedd"
//Output: false
//Explanation: 'e' must have been pressed twice, but it was not in the typed output.

//Constraints:
//1 <= name.length, typed.length <= 1000
//name and typed consist of only lowercase English letters.

//Solution

var isLongPressedName = function(name, typed) {
    let prev = '';
    let i = 0;

    for (const c of typed) {
        if (i < name.length && c === name[i]) {
            prev = c;
            i++
            continue;
        }

        if (c !== prev) return false;
    }

    return i === name.length;
}

