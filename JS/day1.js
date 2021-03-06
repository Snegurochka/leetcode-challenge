// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// o2 complexity
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       let sum = 0;
//       for (let y = i + 1; y < nums.length; y++) {
//         sum = nums[i] + nums[y];
//         if (sum === target) {
//           return [i, y];
//         }
//       }
//     }
//     return [];
//   }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const newObj = {};
    nums.forEach((i, ind) => newObj[i] = ind)

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (newObj[diff] && newObj[diff] !== i) {
            return [i, newObj[diff]];
        }
    }
    return [];
};
