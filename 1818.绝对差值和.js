/*
 * @lc app=leetcode.cn id=1818 lang=javascript
 *
 * [1818] 绝对差值和
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 function Bisect() {
  return { insort_right, insort_left, bisect_left, bisect_right }
  function insort_right(a, x, lo = 0, hi = null) {
      lo = bisect_right(a, x, lo, hi);
      a.splice(lo, 0, x);
  }
  function bisect_right(a, x, lo = 0, hi = null) {
      if (lo < 0) throw new Error('lo must be non-negative');
      if (hi == null) hi = a.length;
      while (lo < hi) {
          let mid = lo + hi >> 1;
          x < a[mid] ? hi = mid : lo = mid + 1;
      }
      return lo;
  }
  function insort_left(a, x, lo = 0, hi = null) {
      lo = bisect_left(a, x, lo, hi);
      a.splice(lo, 0, x);
  }
  function bisect_left(a, x, lo = 0, hi = null) {
      if (lo < 0) throw new Error('lo must be non-negative');
      if (hi == null) hi = a.length;
      while (lo < hi) {
          let mid = lo + hi >> 1;
          a[mid] < x ? lo = mid + 1 : hi = mid;
      }
      return lo;
  }
}

function TreeSet(elements) {
  let ts = [];
  let se = new Set();
  let bisect = new Bisect();
  if (elements) addAll(elements);
  return { add, floor, ceiling, lower, remove, contains, size, clear, toArray };
  function addAll(elements) {
      for (const e of elements) {
          if (se.has(e)) continue;
          add(e);
          se.add(e);
      }
  }
  function add(e) {
      if (!se.has(e)) {
          bisect.insort_right(ts, e);
          se.add(e);
      }
  }
  function ceiling(e) {
      let idx = bisect.bisect_right(ts, e);
      if (ts[idx - 1] == e) return e;
      return ts[bisect.bisect_right(ts, e)];
  }
  function floor(e) {
      let idx = bisect.bisect_left(ts, e);
      if (ts[idx] == e) {
          return e;
      } else {
          return ts[bisect.bisect_left(ts, e) - 1];
      }
  }
  function lower(e) {
      let idx = bisect.bisect_left(ts, e);
      if (ts[idx] < e) {
          return ts[idx];
      } else {
          return ts[bisect.bisect_left(ts, e) - 1];
      }
  }
  function remove(e) {
      let res = new Set(ts);
      res.delete(e);
      ts = [...res];
      se.delete(e);
  }
  function contains(e) {
      return se.has(e);
  }
  function size() {
      return ts.length;
  }
  function clear() {
      ts = [];
  }
  function toArray() {
      return ts;
  }
}

const MOD = 1e9 + 7;
const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;
const mi = Math.min;
const abs = Math.abs;
const minAbsoluteSumDiff = (a, b) => {
  let ts = new TreeSet([MIN, MAX]);
  let res = sum = 0;
  let n = a.length;
  for (let i = 0; i < n; i++) {
      ts.add(a[i]);
      sum += abs(a[i] - b[i]);
  }
  res = sum;
  for (let i = 0; i < n; i++) {
      let it = ts.ceiling(b[i]);
      res = mi(res, sum - abs(a[i] - b[i]) + abs(it - b[i]));
      it = ts.lower(it);
      res = mi(res, sum - abs(a[i] - b[i]) + abs(it - b[i]));
  }
  return res % MOD;
};

// @lc code=end

