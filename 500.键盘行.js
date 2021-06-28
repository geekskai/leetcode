/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter((w) => {
        // remove word from array if it fails matching all three rows
        if (
            !/^[qwertyuiop]*$/i.test(w) &&
            !/^[asdfghjkl]*$/i.test(w) &&
            !/^[zxcvbnm]*$/i.test(w)
        ) return false;
        
        return true;
    });
};
// @lc code=end

