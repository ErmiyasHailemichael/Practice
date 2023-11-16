/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numIndexMap={};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndexMap[complement] !== undefined) {
            return [numIndexMap[complement], i];
        }

        numIndexMap[nums[i]] = i;
    }

    // No solution found
    return null;
};
const nums=[2,7,11,15]
const target =9
const result = twoSum(nums, target)