/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
  let  ans= 0;
  arr.forEach((it,i)=>{
      if(i%2===0){
          if(i===0){
              ans+=arr.reduce((pre,cur)=>pre+cur)
          }else{
               let start=0
      while(i<arr.length){
          let arrs=arr.slice(start,i+1);
          ans+=arrs.reduce((pre,cur)=>pre+cur)
          i++
          start++
      }
          }
      }
  })
  return ans;
};
// @lc code=end

