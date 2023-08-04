//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

//Examples

//Input: s = "()"
//Output: true

//Input: s = "()[]{}"
//Output: true

//Input: s = "(]"
//Output: false

//Constraints:
//1 <= s.length <= 104
//s consists of parentheses only '()[]{}'.

//Solution

const isValid = (s) => {
    const stack = [];
    for (const c of s) {
      if (c === '{' || c === '[' || c === '(') stack.push(c);
      else {
        const p = stack.pop(); // No need to check for empty before popping (returns undefined)
        if ((c === '}' && p !== '{') || (c === ']' && p !== '[') || (c === ')') & (p !== '(')) return false;
      }
    }
    return stack.length === 0;
}


