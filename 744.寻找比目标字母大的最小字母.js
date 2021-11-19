/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
  const targetNum = target.charCodeAt(0);
  const len = letters.length;
  let low = 0,
    high = letters.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    const item = letters[mid].charCodeAt(0);
    if (item > targetNum) {
      high = mid - 1;
    } else if (item <= targetNum) {
      low = mid + 1;
    }
  }
  return low >= len ? letters[0] : letters[low];
};
// @lc code=end
