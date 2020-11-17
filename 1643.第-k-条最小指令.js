/*
 * @lc app=leetcode.cn id=1643 lang=javascript
 *
 * [1643] 第 K 条最小指令
 */

// @lc code=start
/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
let kthSmallestPath = function(destination, k) {
	const [V, H] = destination
	const N = V + H
	let s = '', n = N, v = V, h = H
	while (s.length < N) {
		let c = p(n - 1, v)
		if (h > 0 && c >= k) {
			s += 'H'
			h--
			n--
		}else {
			s += 'V'
			k -= c
			v--
			n--
		}
	}
	return s
}

function p(n, r) {
	let base = 1
	for (let i = r + 1; i <= n; i++) {
		base *= i
	}
	for (let i = 1; i <= n - r; i++) {
		base /= i
	}
	return base
}
// @lc code=end

