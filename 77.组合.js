/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-28 00:39:05
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-28 00:39:27
 * @FilePath: /undefined/Users/gankai/Desktop/file/data/GitHubGanKai/leetcode/77.组合.js
 */
/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let out = comb(k, n);
    // console.log(out);
    return out;
};


function comb(max, n, out=[], curr = [], index = 1){
    if(curr.length===max){
        out.push(curr);
        return [];
    }
    else{
        while(index<=n){
            comb(max, n, out, [...curr, index], ++index);
        }
        return out;
    }
}
// @lc code=end

