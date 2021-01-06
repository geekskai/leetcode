/*
 * @lc app=leetcode.cn id=421 lang=javascript
 *
 * [421] 数组中两个数的最大异或值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let mask = 0,
  maxSeen = 0;

// since nums[i] can range from 0 to 2^31 - 1
// we will need at most 30 bits represent a number
// e.g. with 3 bits, we can represent unsigned ints from 0 to 7 (which is 2^3-1)

const numBits = 30;

for (let i = numBits; i >= 0; i--) {
// get prefixes upto ith bit (use appropriate mask)
mask = mask | (1 << i);
console.log(mask.toString(2));
let prefixes = new Set();
for (let num of nums) {
  const prefix = num & mask;
  prefixes.add(prefix);
}

// for the kth bit the best_case_candidate for XOR
// is the maximum from k-1 bits (from the previous iteration)
// with by a 1 added at the kth position
const bestCaseXor = maxSeen | (1 << i);
for (let prefix of prefixes) {
  const match = bestCaseXor ^ prefix;
  if (prefixes.has(match)) {
    maxSeen = bestCaseXor;
    break;
  }
}
}
return maxSeen;
};
// @lc code=end

