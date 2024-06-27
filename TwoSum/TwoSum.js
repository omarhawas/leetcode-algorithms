const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            return [i , j]
        }
    }
  }
};

//Better way. O(n) instead of O(n2)

function twoNumberSum(array, targetSum) {
    const newObj = {};

    for (let i = 0; i < array.length; i++) {
        const searchingNum = targetSum - array[i];
    if (searchingNum in newObj) {
        return [array[newObj[searchingNum]], array[i]];
    }
        newObj[array[i]] = i;
    }
    return [];
}