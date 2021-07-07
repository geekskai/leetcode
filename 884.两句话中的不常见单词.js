/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const words = (A+" "+B).split(" ");
  return words.filter((word,idx) => words.every((w,i) => word !== w || i === idx));
};
// @lc code=end

