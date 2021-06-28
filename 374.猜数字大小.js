/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1, r = n;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (guess(mid) == 0) return mid;
    else if (guess(mid) == 1) l = mid + 1;
    else r = mid - 1;
  }
  // Time Complexity: O(log(n))
  // Space Complexity: O(1)
};
// @lc code=end

