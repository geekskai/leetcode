/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-30 13:52:08
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-30 13:52:26
 * @FilePath: /notta-meeting/Users/mac/Desktop/gankai/leetcode/1078.bigram-分词.js
 */
/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  let result = [];
  text = text.split(' ');
  
  for (let i = 0; i < text.length - 2; i++) {
    if (text[i] === first && text[i + 1] === second) result.push(text[i + 2]);
  }
  
  return result;
};
// @lc code=end

