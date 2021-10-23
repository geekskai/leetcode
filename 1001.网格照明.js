/*
 * @lc app=leetcode.cn id=1001 lang=javascript
 *
 * [1001] 网格照明
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */

/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
 var gridIllumination = function(N, lamps, queries) {
    const result = []
    for (let point of queries) {
        const isLight = queryisLight(point, lamps)
        result.push(isLight)
        // 关灯
        closeLamp(point, lamps)
    }
    return result
};

function closeLamp (point, lamps) {
    const deleteIndex = []
    for (let i = 0; i < lamps.length; i++) {
        const lamp = lamps[i]
        if (
            Math.abs(lamp[0] - point[0]) <= 1 &&
            Math.abs(lamp[1] - point[1]) <= 1
        ) {
            deleteIndex.push(i)
        }
    }
    deleteIndex.sort((a, b) => {
        return b - a
    })
    for (let index of deleteIndex) {
        lamps.splice(index, 1)
    }
}

// 判断是否被照亮
function queryisLight (point, lamps) {
    for (let lamp of lamps) {
        if (
            point[0] === lamp[0] ||
            point[1] === lamp[1] ||
            Math.abs(point[0] - lamp[0]) === Math.abs(point[1] - lamp[1])
        ) {
            return 1
        }
    }
    return 0
}


// @lc code=end

