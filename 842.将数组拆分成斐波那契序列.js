/*
 * @lc app=leetcode.cn id=842 lang=javascript
 *
 * [842] 将数组拆分成斐波那契序列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    const max = 2147483647 // 最大值
  
    /**
     * @param {number[]} arr 结果数组
     * @param {number} index 指向字符串S的指针，表明当前走到哪个数字了
     * @return {number[] | undefined}
     */
    const backTrack = (arr, index) => {
      // 如果指针走到头则返回
      if (index >= S.length) {
        if (arr.length > 2) { // 数组长度大于2满足条件，返回结果数组
          return arr
        }
        return // 否则返回 undefined
      }
  
      // 从当前index开始，遍历可能的数字拼接情况
      for (let i = index; i < S.length; i++) {
        const str = S.substring(index, i + 1)
        if (str.length > 1 && str[0] === '0') break // 如果以0开头，则后序的都不满足条件，停止遍历
        const item = Number(str)
        if (item > max) break // 大于最大值，停止遍历
        const len = arr.length
        if (len > 1) { // 当结果数组长度大于1时，当前值需要满足等于前两个数之和的条件
          if (arr[len - 1] + arr[len - 2] === item) {
            const res = backTrack([...arr, item],i + 1)
            if (res) return res // 如果结果有效，返回结果
            break // 只可能有一种i使当前值满足 a[n]=== a[n - 2] + a[n - 1]
          }
        } else {
          const res = backTrack([...arr, item],i + 1)
          if (res) return res // 如果结果有效，返回结果
        }
      }
    }
  
    return backTrack([], 0) || []
  };

// @lc code=end

