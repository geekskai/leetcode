/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-11-29 11:25:36
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-28 00:38:34
 * @FilePath: /undefined/Users/gankai/Desktop/file/data/GitHubGanKai/leetcode/17.电话号码的字母组合.js
 */
/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (digits == null || digits.length === 0) return [];
  
    const map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
    };
  
    const res = [];
    const go = (i, s) => {
      if (i === digits.length) {
        res.push(s);
        return;
      }
  
      for (const c of map[digits[i]]) {
        go(i + 1, s + c);
      }
    };
  
    go(0, '');
    return res;
  };
// @lc code=end

