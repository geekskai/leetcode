/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let current = 0; const size = flowerbed.length;
	for(var i = 0; i <= size; i++) {
		if (i < size && flowerbed[i] == 0) {
			current++;
			if (i == 0) current++;
			if (i == size - 1) current++;
		} else {
			n -= Math.trunc((current - 1) / 2);
			if (n <= 0) return true;
			current = 0;
		}
	}
	return false;
};
// @lc code=end

