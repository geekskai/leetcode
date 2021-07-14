/*
 * @lc app=leetcode.cn id=825 lang=javascript
 *
 * [825] 适龄的朋友
 */

// @lc code=start
/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  if(ages.length <= 1) return 0;
  var nums = new Array(121).fill(0)
//O(n) loop here
  for(let i of ages){ nums[i]++ }
      var ans = 0
  for(let i = 0 ;i <= 120; i++){
      let countA = nums[i]
      for(let j = 0; j <= 120; j++){
          let countB = nums[j]
          if((i * 0.5 + 7 >= j) || (i < j)) continue
          ans += countA * countB
          if(i === j) ans -= countA
      }
  }
  return ans;
};
// @lc code=end

