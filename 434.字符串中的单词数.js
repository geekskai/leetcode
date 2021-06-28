/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 22:35:44
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 22:36:01
 * @FilePath: /vue-jd-h5/Users/gankai/Desktop/GitHubGanKai/leetcode/434.字符串中的单词数.js
 */
/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function (s) {
  return s.split(' ').filter(Boolean).length;
};
// @lc code=end

