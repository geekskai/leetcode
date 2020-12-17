/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    
    let bucketSize = Math.max(1, Math.floor((max - min)/ nums.length - 1));
    
    let buckets = {};
    
    for(let i=0;i<nums.length;i++) {
        let bucketId = Math.floor((nums[i] - min) / bucketSize);
        buckets[bucketId] = {
            min: Math.min(nums[i], buckets[bucketId] ? buckets[bucketId].min : Infinity),
            max: Math.max(nums[i], buckets[bucketId] ? buckets[bucketId].max : -Infinity)
        };
    }

	let prevBucketMax = min, maxGap = 0;
    Object.values(buckets).forEach((b) => {
			maxGap = Math.max(maxGap, b.min - prevBucketMax);
            prevBucketMax = b.max;
    });
    
    return maxGap;
};
// @lc code=end

