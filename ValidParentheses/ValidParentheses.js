var isValid = function (s) {
  const obj = { "(": ")", "[": "]", "{": "}" };
  const arr = [];
  for (let i of s) {
    if (obj[i]) {
      arr.push(obj[i]);
    } else if (arr.length > 0 && arr[arr.length - 1] === i) {
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length === 0;
};
