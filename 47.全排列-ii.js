/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let data = [];
	nums = nums.sort();
	function _permute(curr, remaining) {
		if (!remaining.length) {
			data.push(curr);
			return;
		}
        let uniques = new Set();
		for (let i = 0; i < remaining.length; i++) {
            if(uniques.has(remaining[i])) {
				continue;
			} else {
                uniques.add(remaining[i]);
				curr.push(remaining[i]);
				_permute([...curr], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
				curr.pop();
			}
		}
	}
	_permute([], nums);
	return data;
};
// @lc code=end

