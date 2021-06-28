/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    /*
        blank  空格
        sign   + -
        digit  0-9
        e      e
        .      .
    */
    const graph = {
        0:{ 'blank': 0, 'sign': 1, '.': 2, 'digit': 6 },
        1:{ 'digit': 6, '.': 2 },
        2:{ 'digit': 3 },
        3:{ 'digit': 3, 'e': 4 },
        4:{ 'digit': 5, 'sign': 7 },
        5:{ 'digit': 5 },
        6:{ 'digit': 6, '.': 3,  'e': 4 },
        7:{ 'digit': 5 },
    }

    let state = 0;

    // 空格不影响状态
    for (let c of s.trim()) {
        if (c >= '0' && c <= '9') {
            c = 'digit';
        } else if (c === ' ') {
            c = 'blank';
        } else if(c === '+' ||  c === '-') {
            c = 'sign'
        }

        state = graph[state][c];

        // 如果得到的状态为undefind说明不在可用字符范围，直接返回false
        if (state === undefined) {
            return false;
        }

    }
    
    if (state == 3 || state == 5 || state == 6) {
        return true;
    }

    return false;
};
// @lc code=end

