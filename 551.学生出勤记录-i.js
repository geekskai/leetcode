/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// var checkRecord = function(s) {
var checkRecord = function (s) {
  return !/^.*(A.*A|L{3,}).*$/.test(s)
};
// @lc code=end

