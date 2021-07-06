/*
 * @lc app=leetcode.cn id=1039 lang=javascript
 *
 * [1039] 多边形三角剖分的最低得分
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(A) {
  let dp = Array(A.length+1).fill(-1).map(()=>Array(A.length+1).fill(-1))
    return fun(A,1,A.length-1,dp)
};
let fun = function(A,i,j,dp){
  if(i>=j){
    return 0
  }
    if(dp[i][j]!==-1){
        return dp[i][j]
    }
  let min = Number.MAX_VALUE
  for(let k =i;k<=j-1;k++){
       let temp  = fun(A,i,k,dp)+fun(A,k+1,j,dp)+A[i-1]*A[k]*A[j]
      if(temp<min){
        min =temp
      }
  }
  dp[i][j]= min
    return min
};
// @lc code=end

