/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  // 1. 设置最高次数
  let maxTime = 0;

  // 2. 遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 2.1 设置窗口起点值
    const value = s[i];

    // 2.2 设置参数
    let replaceTime = k, // 可滑动次数
      slide = i, // 滑动的下标
      time = 1; // 本次出现数

    // 2.3 向右开始滑动
    while (
      (replaceTime || s[slide + 1] === value) // 还有滑动次数或者下一个字符串相同
      && slide < s.length - 1 // 限制滑动边界 [i, s.length - 1]
    ) {
      // 每滑动一次向右移一位
      slide++;
      // 每滑动一次本次出现数 + 1
      time++;
      // 如果本次是不相同的，减少滑动次数
      if (s[slide] !== value) {
        replaceTime--;
      }
    }

    // 2.4 如果向右到顶，但是还有 replaceTime，
    // 表明向左还可以滑，那就继续向左滑动
    // 滑动前重置一下开始位置
    slide = i;

    // 2.5 向左开始滑动
    while (
      (replaceTime || s[slide - 1] === value) // 类似向右的判断
      && slide > 0 // 边界为 [0, i]
    ) {
      // 每滑动一次向左移一位
      slide--;
      // 每滑动一次本次出现数 + 1
      time++;
      // 如果本次是不相同的，减少滑动次数
      if (s[slide] !== value) {
        replaceTime--;
      }
    }

    // 2.6 将本次滑动次数汇总到最高次数中
    maxTime = Math.max(maxTime, time);
  }

  // 3. 返回结果
  return maxTime;
};

// @lc code=end

