/*
 * @lc app=leetcode.cn id=677 lang=javascript
 *
 * [677] 键值映射
 */

// @lc code=start

var MapSum = function () {};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {};

/**
 * @param {string} prefix
 * @return {number}
 */
var MapSum = function () {
  this.map = new Map();
};

MapSum.prototype.insert = function (key, val) {
  this.map.set(key, val);
};

MapSum.prototype.sum = function (prefix) {
  let res = 0;
  for (const s of this.map.keys()) {
    if (s.startsWith(prefix)) {
      res += this.map.get(s);
    }
  }
  return res;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end
