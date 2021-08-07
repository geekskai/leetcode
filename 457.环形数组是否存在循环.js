/*
 * @lc app=leetcode.cn id=457 lang=javascript
 *
 * [457] 环形数组是否存在循环
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Returns -1 for exit condition
function getNextPosition(arr, index, isForward) {
  //movements in a cycle must all follow a single direction. Cycle must not consist of both forward and backward movements.
  let direction = arr[index] >= 0;
  if(direction !== isForward) return -1;

  let nextIndex = (arr[index] + index)% arr.length;
  
  //handle -ve
  if(nextIndex < 0) nextIndex = nextIndex + arr.length;
  
  //one element loop
  if(nextIndex === index) return -1;
  return nextIndex;
}

var circularArrayLoop = function(nums) {
  let n = nums.length;
  if(n <= 1) return false;
  let i = 0;
  let j = 0;
  for(let i = 0; i< n; i++) {
      let slow, fast;
      slow = fast = i;
      let isForward = nums[i] > 0 ? true : false
      while(true) {
          slow = getNextPosition(nums, slow, isForward)
          if(slow === -1) break;

          fast = getNextPosition(nums, fast, isForward)
          if(fast === -1) break;
          
          fast = getNextPosition(nums, fast, isForward)
          if(fast === -1) break;
          
          if(slow === fast) return true;
      }
  }
  return false;
};
// @lc code=end

