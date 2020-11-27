/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {

	const sumTwoList = function(x,y){
        let len = x.length;
        let result = new Map();
        for(let i = 0; i < len; i++){
            for(let j = 0; j < len; j++){
               let c = x[i] + y[j];
               result.set(c, result.get(c) + 1 || 1); 
            }
        }
        return result;
    }
    
    let sum1 = sumTwoList(A,B);
    let sum2 = sumTwoList(C,D);
    let total = 0;
   
    sum1.forEach((value,key) =>{
        let offset = 0 - key;
        if(sum2.has(offset)){
            total += (sum2.get(offset) * sum1.get(key));
        }
    })
    return total;
};
// @lc code=end

