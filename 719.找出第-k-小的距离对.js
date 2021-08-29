/*
 * @lc app=leetcode.cn id=719 lang=javascript
 *
 * [719] 找出第 k 小的距离对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// helper
function numDifferences(nums, difference) {
  let i = 0,
      j = 0,
      result = 0;
  
  while (i < nums.length - 1) {
    while (j < nums.length && nums[j] - nums[i] <= difference) {
      j++;
    }
    
    result += (j - i - 1);
    i++;
  }
  
  return result;
}

function smallestDistancePair(nums, k) {
  const sortedNums = [...nums].sort((a, b) => a < b ? -1 : 1);
  
  let lowerBound = 0,
      upperBound = sortedNums[sortedNums.length - 1] - sortedNums[0];
  
  while (lowerBound < upperBound) {
    const mid = lowerBound + Math.floor((upperBound - lowerBound) / 2);
    const count = numDifferences(sortedNums, mid);
    
    if (count < k) {
      lowerBound = mid + 1;
    } else {
      upperBound = mid;
    }
  }
  
  return lowerBound;
};
// @lc code=end

