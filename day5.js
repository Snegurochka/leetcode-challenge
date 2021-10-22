// Write a function to find the longest common prefix string amongst an array of strings.

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const letter = strs[0][i];

        for (let y = 1; y < strs.length; y++) {
            if (strs[y][i] !== letter) {
                return prefix;
            }
        }
        prefix += letter;
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));