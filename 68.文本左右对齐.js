/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    for (let res = [[]], i = 0, letters = 0; i <= words.length; letters += words[i++].length) {
        let row = res[res.length - 1];
        if (i === words.length || row.length && letters + row.length + words[i].length > maxWidth) {
            if (row.length === 1 || i === words.length) {
                res[res.length - 1] = row.join(' ') + ' '.repeat(maxWidth - letters - row.length + 1);
                if (i === words.length) return res;
            } else {
                let line = row[0];
                let spaces = maxWidth - letters;
                let minSpaces = ' '.repeat(Math.floor(spaces / (row.length - 1)));
                let addSpace = spaces % (row.length - 1);
                for (let w = 1; w < row.length; w++) {
                    line += minSpaces + (w <= addSpace ? ' ' : '') + row[w];
                }
                res[res.length - 1] = line;
            }
            res.push([]);
            letters = 0;
        }
        res[res.length - 1].push(words[i]);
    }
};
// @lc code=end

