/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 *
 * https://leetcode-cn.com/problems/height-checker/description/
 *
 * algorithms
 * Easy (71.51%)
 * Likes:    42
 * Dislikes: 0
 * Total Accepted:    11.5K
 * Total Submissions: 15.9K
 * Testcase Example:  '[1,1,4,2,1,3]'
 *
 * 学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。
 * 
 * 请你返回能让所有学生以 非递减 高度排列的最小必要移动人数。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：heights = [1,1,4,2,1,3]
 * 输出：3
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= heights.length <= 100
 * 1 <= heights[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {

    let ans = 0, copy = heights.slice(0).sort((a, b) => a - b)
    heights.forEach((h, i) => {
        if (h !== copy[i]) {
            ans++
        }
    })
    return ans

};
// @lc code=end

