// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 
// 12 is written as XII, which is simply X + II. 
// The number 27 is written as XXVII, which is XX + V + II.
// Input: s = "III"
// Output: 3
// Input: s = "IV"
// Output: 4
// Input: s = "IX"
// Output: 9

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const hashMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let intVal = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = hashMap[s[i]];
        const next = hashMap[s[i + 1]];
        if (curr < next) {
            intVal += next - curr;
            i++;
        } else {
            intVal += curr;
        }
    }
    return intVal;
};