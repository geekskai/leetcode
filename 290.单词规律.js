/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const strArr = str.split(' ');
    if (pattern.length !== strArr.length) return false;
    const patMap = new Map();
    const strMap = new Map();
    for (let i = 0; i < pattern.length; i++) {
      if (
        (patMap.has(pattern[i]) && patMap.get(pattern[i]) !== strArr[i]) ||
        (strMap.has(strArr[i]) && strMap.get(strArr[i]) !== pattern[i])
      ) {
        return false;
      }
      patMap.set(pattern[i], strArr[i]);
      strMap.set(strArr[i], pattern[i]);
    }
    return true;

