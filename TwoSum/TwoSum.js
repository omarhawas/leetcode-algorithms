var twoSum = function (nums, target) {
  let numsObject = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let searchingNum = target - num;
    if (numsObject[searchingNum] !== undefined) {
      return [numsObject[searchingNum], i];
    }
    numsObject[num] = i;
  }
};
