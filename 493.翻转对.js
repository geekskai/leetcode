/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const search = (bit, i) => {
    let sum = 0;
    while (i < bit.length){
        sum += bit[i];
        i += i & -i;
    }
    return sum;
}

const insert = (bit, i) => {
    while (i > 0){
        bit[i] += 1;
        i -= i & -i;
    }
    return bit;
}

const indexed = (arr, val) => {
    let l = 0, r = arr.length-1, m = 0;
    while (l <= r) {
        m = l + ((r-l) >> 1);
        if (arr[m] >= val){
            r = m-1;
        }else{
            l = m+1;
        }
    }
    return l+1;
}

var reversePairs = function(nums) {
    let count = 0;
    let copy = nums.slice().sort((a,b)=>a-b);
    let bit = new Array(nums.length+1).fill(0);
    for (let num of nums){
        count += search(bit, indexed(copy, 2*num+1));
        bit = insert(bit, indexed(copy, num));
    }
    
    return count;
};
// @lc code=end

