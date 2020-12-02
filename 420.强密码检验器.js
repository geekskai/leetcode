/*
 * @lc app=leetcode.cn id=420 lang=javascript
 *
 * [420] 强密码检验器
 */

// @lc code=start
/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function(s, a = 6, b = 20, c = 3) {
    const clusters = buildClusters(s, c);
    for (let i = 0; i < s.length - b && clusters.minReplaceCount; i++) {
        deleteOne(clusters, c);
    }
    const mustAddCount = !/[a-z]/.test(s) + !/[A-Z]/.test(s) + !/\d/.test(s);
    return Math.max(0, s.length - b) + Math.max(a - s.length, mustAddCount, clusters.minReplaceCount);
};

function buildClusters(s, c) {
    const clusters = new Array(c).fill(0).map(cl => new Map());
    clusters.minReplaceCount = 0;
    let re = new RegExp(`(.)\\1{${c - 1},}`, 'g'), match;
    while (match = re.exec(s)) {
        let len = match[0].length;
        clusters[len % c].set(len, (clusters[len % c].get(len) || 0) + 1);
        clusters.minReplaceCount += Math.floor(len / c);
    }
    return clusters;
}

function deleteOne(clusters, c) {
    const cluster = clusters.find(cl => cl.size);
    for (const [len, count] of cluster) {
        cluster.set(len, count - 1);
        if (count === 1) cluster.delete(len);
        clusters.minReplaceCount -= len % c === 0;
        if (len === c) break;
        const clusterUpdate = clusters[(len - 1) % c];
        clusterUpdate.set(len - 1, (clusterUpdate.get(len - 1) || 0) + 1);
        break;
    }
}
// @lc code=end

