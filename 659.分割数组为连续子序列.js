/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    if(nums.length < 3) return false;
    
    const freqMap = new Map(), appendfreq = new Map();
    nums.forEach(card => {
        if (!freqMap.has(card))
            freqMap.set(card, 0);
        
        freqMap.set(card, freqMap.get(card) + 1);
    });
    
     for (let i of nums) {
        if (freqMap.get(i) == 0) continue;
        else if ((appendfreq.get(i) || 0) > 0) {
            appendfreq.set(i, appendfreq.get(i) - 1);
            appendfreq.set(i+1, (appendfreq.get(i+1) || 0) + 1);
        }   
        else if ((freqMap.get(i+1) || 0) > 0 && (freqMap.get(i+2) || 0) > 0) {
            freqMap.set(i+1, freqMap.get(i+1) - 1);
            freqMap.set(i+2, freqMap.get(i+2) - 1);
            appendfreq.set(i+3, (appendfreq.get(i+3) || 0) + 1);
        }
        else return false;
        freqMap.set(i, freqMap.get(i) - 1);
    }
    return true;
};
// @lc code=end

