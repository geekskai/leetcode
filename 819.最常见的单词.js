/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);
    const words = paragraph.toLowerCase().split(/\W+/);
    const map = {};
    for (const w of words) {
      if (!bannedSet.has(w)) {
        if (map[w] == null) map[w] = 0;
        map[w]++;
      }
    }
  
    let res = '';
    let max = -Infinity;
    for (const w in map) {
      const count = map[w];
      if (count > max) {
        res = w;
        max = count;
      }
    }
    return res;
};
// @lc code=end

