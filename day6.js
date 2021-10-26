// Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// Input: s = "()[]{}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const hashMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const result = [];
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (hashMap[current]) {
            const lastChar = result.pop();
            if (lastChar !== hashMap[current]) return false;
        } else {
            result.push(current);
        }
    }
    return result.length === 0;
};

console.log(isValid("([)]"));