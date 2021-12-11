/*
 * @lc app=leetcode.cn id=911 lang=javascript
 *
 * [911] 在线选举
 *
 * https://leetcode-cn.com/problems/online-election/description/
 *
 * algorithms
 * Medium (42.57%)
 * Likes:    79
 * Dislikes: 0
 * Total Accepted:    9.5K
 * Total Submissions: 19.3K
 * Testcase Example:  '["TopVotedCandidate","q","q","q","q","q","q"]\n' +
  '[[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]'
 *
 * 给你两个整数数组 persons 和 times 。在选举中，第 i 张票是在时刻为 times[i] 时投给候选人 persons[i] 的。
 * 
 * 对于发生在时刻 t 的每个查询，需要找出在 t 时刻在选举中领先的候选人的编号。
 * 
 * 在 t 时刻投出的选票也将被计入我们的查询之中。在平局的情况下，最近获得投票的候选人将会获胜。
 * 
 * 实现 TopVotedCandidate 类：
 * 
 * 
 * TopVotedCandidate(int[] persons, int[] times) 使用 persons 和 times
 * 数组初始化对象。
 * int q(int t) 根据前面描述的规则，返回在时刻 t 在选举中领先的候选人的编号。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["TopVotedCandidate", "q", "q", "q", "q", "q", "q"]
 * [[[0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]], [3], [12], [25], [15],
 * [24], [8]]
 * 输出：
 * [null, 0, 1, 1, 0, 0, 1]
 * 
 * 解释：
 * TopVotedCandidate topVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0,
 * 1, 0], [0, 5, 10, 15, 20, 25, 30]);
 * topVotedCandidate.q(3); // 返回 0 ，在时刻 3 ，票数分布为 [0] ，编号为 0 的候选人领先。
 * topVotedCandidate.q(12); // 返回 1 ，在时刻 12 ，票数分布为 [0,1,1] ，编号为 1 的候选人领先。
 * topVotedCandidate.q(25); // 返回 1 ，在时刻 25 ，票数分布为 [0,1,1,0,0,1] ，编号为 1
 * 的候选人领先。（在平局的情况下，1 是最近获得投票的候选人）。
 * topVotedCandidate.q(15); // 返回 0
 * topVotedCandidate.q(24); // 返回 0
 * topVotedCandidate.q(8); // 返回 1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= persons.length <= 5000
 * times.length == persons.length
 * 0 <= persons[i] < persons.length
 * 0 <= times[i] <= 10^9
 * times 是一个严格递增的有序数组
 * times[0] <= t <= 10^9
 * 每个测试用例最多调用 10^4 次 q
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
/**
 * @param {number} t
 * @return {number}
 */
function Bisect() {
  return { insort_right, insort_left, bisect_left, bisect_right };
  function insort_right(a, x, lo = 0, hi = null) {
    lo = bisect_right(a, x, lo, hi);
    a.splice(lo, 0, x);
  }
  function bisect_right(a, x, lo = 0, hi = null) {
    if (lo < 0) throw new Error("lo must be non-negative");
    if (hi == null) hi = a.length;
    while (lo < hi) {
      let mid = (lo + hi) >> 1;
      x < a[mid] ? (hi = mid) : (lo = mid + 1);
    }
    return lo;
  }
  function insort_left(a, x, lo = 0, hi = null) {
    lo = bisect_left(a, x, lo, hi);
    a.splice(lo, 0, x);
  }
  function bisect_left(a, x, lo = 0, hi = null) {
    if (lo < 0) throw new Error("lo must be non-negative");
    if (hi == null) hi = a.length;
    while (lo < hi) {
      let mid = (lo + hi) >> 1;
      a[mid] < x ? (lo = mid + 1) : (hi = mid);
    }
    return lo;
  }
}

function TopVotedCandidate(persons, times) {
  let leads = [];
  let lead = -1;
  let cnt = new Map();
  let bisect = new Bisect();
  for (const p of persons) {
    cnt.set(p, cnt.get(p) + 1 || 1);
    if (cnt.get(p) >= (cnt.get(lead) || 0)) lead = p;
    leads.push(lead);
  }
  return { q };

  function q(t) {
    return leads[bisect.bisect_right(times, t) - 1]; // c++ upper_bound
  }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
// @lc code=end
