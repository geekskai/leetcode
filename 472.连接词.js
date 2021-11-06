/*
 * @lc app=leetcode.cn id=472 lang=javascript
 *
 * [472] 连接词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  let set = new Set();
  let res = [];
  let getWord = function (word, start) {
    for (let str = "", len = word.length - 1; start <= len; ++start) {
      str += word[start];
      if (set.has(str) && (start === len || getWord(word, start + 1))) {
        return true;
      }
    }
    return false;
  };
  words.sort((a, b) => a.length - b.length);
  set.add(words[0]);
  for (let i = 1, len = words.length; i < len; ++i) {
    if (getWord(words[i], 0)) {
      res.push(words[i]);
    } else {
      set.add(words[i]);
    }
  }
  return res;
};

// @lc code=end
