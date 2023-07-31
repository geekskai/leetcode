/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (40.93%)
 * Likes:    6671
 * Dislikes: 0
 * Total Accepted:    981.1K
 * Total Submissions: 2.4M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 *
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;

  // If nums1 is larger than nums2, swap them to ensure n1 is smaller than n2.
  if (n1 > n2) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let l = 0;
  let r = n1;
  while (l <= r) {
    let mid1 = Math.floor((l + r) / 2);
    let mid2 = Math.floor((n1 + n2 + 1) / 2 - mid1);

    let maxLeft1 = mid1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1];
    let minRight1 = mid1 == n1 ? Number.MAX_SAFE_INTEGER : nums1[mid1];

    let maxLeft2 = mid2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1];
    let minRight2 = mid2 == n2 ? Number.MAX_SAFE_INTEGER : nums2[mid2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((n1 + n2) % 2 == 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      r = mid1 - 1;
    } else {
      l = mid1 + 1;
    }
  }

  return -1;
};
// @lc code=end
