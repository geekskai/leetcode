/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const adjList = new Map();
    
    // Initialize the graph
    for (let i = 0; i < equations.length; i++) {
        adjList.set(equations[i][0], []);
        adjList.set(equations[i][1], []);
    }

    // Build the graph
    for (let i = 0; i < equations.length; i++) {
        const u = equations[i][0];
        const v = equations[i][1];
        const weight = values[i];
        
        // u to v
        adjList.get(u).push([v,weight]);
        
        // v to u
        adjList.get(v).push([u, 1/weight]);
    }
    
    // Initialize results array
    const res = [];
    
    for (let i = 0; i < queries.length; i++) {
        // divisor
        const src = queries[i][0];
        
        // dividend
        const dest = queries[i][1];
        const seen = new Set();
        const val = dfs(adjList, src, src, dest, 1, seen);
        
        
        if (val === false) {
            res.push(-1);
        } else {
            res.push(val);
        }
    }
    
    return res;
}
// In the case that there are other multiple valid paths from source to destination, ultimately, the quotient is the same
// returning the first then works.
var dfs = function(adjList, src, curr, dest, quotient, seen) {
    //destination or source is non existent
    if (!adjList.has(dest) || !adjList.has(src)) {
        return -1;
    }
    
    //source is same as destination i.e. self-loop.
    if (src === dest) {
        return 1;
    }
    
    // Reached destination
    if (curr === dest) {
        return quotient;
    }
    
    seen.add(curr);
    
    const neighbors = adjList.get(curr);
    
    for (let i = 0; i < neighbors.length; i++) {
        if (seen.has(neighbors[i][0])) {
            continue;
        }
        const val = dfs(adjList, src, neighbors[i][0], dest, quotient * neighbors[i][1], seen);
        // if any value was found we return because
        // the only other cases would be having a cycle, or reaching our destination or path.
        if (val !== false) return val;
    }
    
    // We only return false if we've searched all neighbors and there's no path to destination
    // however we know that src and dest are in adjList
    // thus it may just be disconnected, but this may return from different levels of recursion.
    return false;
};
// @lc code=end

