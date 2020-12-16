/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(ar) {
    if(ar.length == 0) return ar;
    
	/*  clone array & sort it   */
    let sortedAr = ar.slice().sort((a,b) => a - b);
    let res = [];
    let dic = {};
    
	/*  assign ranks        */
    let rank = 1;
    for(let i = 0; i < sortedAr.length; i++) {
        if(!dic[sortedAr[i]]) {
            dic[sortedAr[i]] = rank;
            rank++;
        }
    }
    
	/*  rank transform of an array  */
    for(let j = 0; j < ar.length; j++) {
        let rankVal = dic[ar[j]];
        res.push(rankVal)
    }
    return res; 
};
// @lc code=end

