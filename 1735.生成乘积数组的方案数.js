/*
 * @lc app=leetcode.cn id=1735 lang=javascript
 *
 * [1735] 生成乘积数组的方案数
 */

// @lc code=start
/**
 * @param {number[][]} queries
 * @return {number[]}
 */
 var waysToFillArray = function(Q) {
  let mod=1e9+7,memo=new Map()   
  let recursion=(i,j)=>{ 
      if(i==1 || j==1)
          return 1
      let state=[i,j]+'',sum=0
      if(memo.get(state))
          return memo.get(state)
      for(let factor=1;factor<=j;factor++)
          if(j%factor==0) // if factor is a divisor of j 
              sum=(sum+recursion(i-1,j/factor))%mod
      memo.set(state,sum)
      return sum
  }
  return Q.map(([i,j])=>recursion(i,j))
};
// @lc code=end

