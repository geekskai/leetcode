/*
 * @lc app=leetcode.cn id=732 lang=javascript
 *
 * [732] 我的日程安排表 III
 */

// @lc code=start

var MyCalendarThree = function() {

};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  let tm = {}; // key is increasing order sorted, when key >= 0, not works for key < 0
  return { book }
  function book(start, end) {
      tm[start] = (tm[start] || 0) + 1;
      tm[end] = (tm[end] || 0) - 1;
      let k = res = 0;
      for (const ke in tm) {
          k += tm[ke];
          res = Math.max(res, k);
      }
      return res;
  }
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

