/*
 * @lc app=leetcode.cn id=650 lang=javascript
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
     
  let memo = new Map();
  let result = dfs(1,0,0, false);
  return result;

  function dfs(quantity, cache, depth, copiedLast){
    if (quantity > n){     
      return Number.MAX_SAFE_INTEGER;
    }
    if (depth > n){     
      return Number.MAX_SAFE_INTEGER;
    }
    if (quantity === n){     
      return depth;
    }

    let key = `${quantity}-${cache}`;
    if (memo.has(key)){
      return memo.get(key);
    }
    let copyRez = Number.MAX_SAFE_INTEGER;
    if (!copiedLast){
      copyRez = dfs(quantity, quantity, depth + 1, true);
    }    
    let pasteRez = dfs(quantity + cache, cache, depth + 1, false);
    let currentRez = Math.min(copyRez, pasteRez);
    memo.set(key, currentRez);
    return currentRez;
  }
};
// @lc code=end

