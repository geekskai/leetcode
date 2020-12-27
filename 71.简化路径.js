/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-28 00:38:44
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-28 00:38:58
 * @FilePath: /undefined/Users/gankai/Desktop/file/data/GitHubGanKai/leetcode/71.简化路径.js
 */
/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    path = path.split('/');
    
    for (let i=0;i<path.length;i++) {
        if (path[i]=='.' || path[i]=='') continue;
        if (path[i]=='..') stack.pop();
        else stack.push(path[i]);
    }
    
    return '/'+stack.join('/');
};
// @lc code=end

