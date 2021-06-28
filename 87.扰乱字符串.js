/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    if (s1 === s2) return true;
    if (!isAnagram(s1, s2)) return false;
  
    // boundaries are because the substrings being non-empty is a requirement
    for (let i = 1; i < s1.length; ++i) {
      if (
        isScramble(s1.substr(0, i), s2.substr(0, i)) &&
        isScramble(s1.substr(i), s2.substr(i))
      )
        return true;
  
      if (
        isScramble(s1.substr(0, i), s2.substr(s1.length - i)) &&
        isScramble(s1.substr(i), s2.substr(0, s1.length - i))
      )
        return true;
    }
    return false;
  };
  
  function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
  
    for (let i = 0; i < s.length; ++i) {
      map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
    }
  
    for (let i = 0; i < t.length; ++i) {
      if (map[t[i]]) map[t[i]]--;
      else return false;
    }
  
    return true;
  }
// @lc code=end

