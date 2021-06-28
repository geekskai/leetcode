/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
/**
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function (S) {
  let arr = S.split(''), stack = []
  arr.forEach((it, i) => {
      if (stack[stack.length - 1] == it) {
          stack.pop()
      } else {
          stack.push(it)
      }
  })
  return stack.join('')
};
// @lc code=end

