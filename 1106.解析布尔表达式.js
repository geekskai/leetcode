/*
 * @lc app=leetcode.cn id=1106 lang=javascript
 *
 * [1106] 解析布尔表达式
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {boolean}
 */
 const compute = s => {
	const op = s[0]
	const nodes = s.slice(2, -1).split(',')
	if (op === '!') {
		if (nodes[0] === 't') {
			return 'f'
		}
		return 't'
	}
	if (op === '&') {
		if (nodes.includes('f')) {
			return 'f'
		}
		return 't'
	}

	if (op === '|') {
		if (nodes.includes('t')) {
			return 't'
		}

		return 'f'
	}

	return op
}

const parseBoolExpr = e => {
	const r = /[&|!]\([^()]+\)/g
	while (r.test(e)) { e = e.replace(r, s => compute(s)) }
	return compute(e) === 't'
}

// @lc code=end

