// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Example 1:
// Input: x = 123
// Output: 321
// Example 2:
// Input: x = -123
// Output: -321
// Example 3:
// Input: x = 120
// Output: 21
// Example 4:
// Input: x = 0
// Output: 0

/**
 * @param {number} x
 * @return {number}
 */
 const reversenum = (x) => {
    const polarity = (x < 0) ? -1 : 1;
    const convsrtedStr = Array.from(x.toString()).reverse().join('');
    const newStr = Number.parseInt(convsrtedStr);
    return newStr * polarity;
};

console.log(reversenum(-123));

// 2 if Array.from().reverse().join('') not allowed
const reversenum2 = (x) => {
    const polarity = (x < 0) ? -1 : 1;
    const str = x.toString();
    let revertedStr = '';
    for( let i = str.length-1; i >= 0; i--) {
        revertedStr += str[i];
    }
    const newStr = Number.parseInt(revertedStr);
    return newStr * polarity;
};