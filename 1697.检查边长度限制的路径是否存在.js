/*
 * @lc app=leetcode.cn id=1697 lang=javascript
 *
 * [1697] 检查边长度限制的路径是否存在
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
 var distanceLimitedPathsExist = function (n, edgeList, queries) {
  queries = queries.map((n, i) => [...n, i]).sort((a, b) => a[2] - b[2]);
  edgeList.sort((a, b) => a[2] - b[2]);
  
  const res = Array(queries.length);
  const ds = new DS(n);
  
  let j = 0;
  for (let [p, q, limit, i] of queries) {
    while (j < edgeList.length && edgeList[j][2] < limit) {
      const [u, v, dis] = edgeList[j];
      ds.union(u, v);
      j++;
    }
    res[i] = ds.find(p) === ds.find(q);
  }
  
  return res;
};

class DS {
  constructor(n) {
    this.id = [...Array(n).keys()];
    this.rank = Array(n).fill(0);
  }
  
  find(i) {
    if (i !== this.id[i]) this.id[i] = this.find(this.id[i]);
    return this.id[i];
  }
  
  union(i, j) {
    const [I, J] = [this.find(i), this.find(j)];
    if (I === J) return false;
    const [rankI, rankJ] = [this.rank[I], this.rank[J]];
    if (rankI < rankJ) this.id[I] = J;
    else if (rankI > rankJ) this.id[J] = I;
    else {
      this.id[I] = J;
      this.rank[J]++;
    }
    return true;
  }
}
// @lc code=end

