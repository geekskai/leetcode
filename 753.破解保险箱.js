/*
 * @lc app=leetcode.cn id=753 lang=javascript
 *
 * [753] 破解保险箱
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var crackSafe = function (n, k) {
  // If k and n equal 1 the only combination possible is 0.
  if (n === 1 && k === 1) return "0";

  // visited will keep track of all visited edges.
  const visited = new Set();

  // The De Bruijn Sequence that will be the output of the function.
  const seq = [];

  // To generate a De Bruijn sequence we must traverse every combination of size n
  // containing the number from 0 to k - 1. We will start with the prefix of the
  // combination with all 0s. If n equals 3 and k is greater than 1 our prefix would be
  // 00 and the first combination, our starting edge would be 000.
  const prefix = "0".repeat(n - 1);

  // We will perform a depth first traveral until we visit every edge (combination)
  // while adding the last element of a combination to the sequence.

  // this is bottom up backtracking
  // first visit all the edges completely before adding the node to the final solution
  dfs(prefix, seq, visited, k);

  // We append the original prefix to the sequence as the a De Bruijn sequence
  // ends with the first combination. If we reverse the sequence it would still be
  // valid and in that case would start with the first combination instead.
  seq.push(prefix);

  // Join the array to return the sequence as a string.
  return seq.join("");
};

const dfs = (prefix, seq, visited, k) => {
  for (let i = 0; i < k; i++) {
    // Generate a new combination using all the numbers from 0 to k - 1
    // this will give us all the edges that are adjacent to the previous
    // combination.
    const combination = prefix + i.toString();

    // Check if the current combination has been visited we skip it.
    if (visited.has(combination)) continue;

    // If the current combination hasn't been visited add it to the visited set
    // so we do no revisit it.
    visited.add(combination);

    // Create a new prefix using the current combination
    // and continue the depth first traversal.
    dfs(combination.slice(1), seq, visited, k);

    // Add the last element of the visited combination to the sequence.
    seq.push(i);
  }
};

// @lc code=end
