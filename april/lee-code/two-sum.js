const nums = [1, 2, 34, 5, 6, 7];
const target = 9;

const two = (arr, sum) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return [i, j];
      }
    }
  }
};

const twohash = (arr, sum) => {
  var result = [];
  var map = {};
  var temp;
  for (var i = 0; i < arr.length; i++) {
    temp = sum - arr[i];
    if (map[temp] !== undefined) {
      result[0] = parseInt(map[temp], 10);
      result[1] = i;
      return result;
    }
    map[arr[i]] = i;
  }
  return -1;
};

// console.log(two(nums, target), "for");
console.log(twohash(nums, target), "hash");

const three = (nums, target) => {
  nums = nums.sort((x, y) => x - y);
  const len = nums.length;
  for (let findIndex = 0; findIndex < len - 2; ++findIndex) {
    const requiresum = target - nums[findIndex];
  }
};
