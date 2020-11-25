/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    var h = Object.create(null), ks, i, r = []
    for (var v of s) h[i = v.charCodeAt()] = (h[i] || 0) + 1
    ks = Object.keys(h)
    while(ks.length) {// 删到为空
        for (i = 0; i < ks.length; i++) 
            r.push(ks[i] | 0), !--h[ks[i]] && ks.splice(i--, 1)
        while (i--) 
            r.push(ks[i] | 0), !--h[ks[i]] && ks.splice(i, 1)
    }
    return String.fromCharCode(...r)
};

// @lc code=end

