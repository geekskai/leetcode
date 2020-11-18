/*
 * @lc app=leetcode.cn id=675 lang=javascript
 *
 * [675] 为高尔夫比赛砍树
 */

// @lc code=start
/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    const compareFunc = (a, b) => a[2] - b[2];
    const minHeap = new PriorityQueue(compareFunc);
    
    addToHeap(forest, minHeap);
    
    let from = [0, 0];
    let minDist = 0;
    let visitedIdx = -1;
    
    while(minHeap.size > 0) {
        const to = minHeap.extract();
        const dist = bfs(forest, from, to, visitedIdx);
        
        if(dist === -1) return -1;
        minDist += dist;
        from = to;
        visitedIdx -= 1;
    }
    
    return minDist;
};

const bfs = (forest, from, to, visitedIdx) => {
    const queue = new Array();
    queue.unshift([from[0], from[1], 0]);
    
    forest[from[0]][from[1]] = visitedIdx;
    
    while(queue.length) {
        const [row, col, dist] = queue.pop();
        
        if(row === to[0] && col === to[1]) return dist;
        
        for(const dir of directions) {
            const nextRow = row + dir[0];
            const nextCol = col + dir[1];
            
            if(
                nextRow >= 0
                && nextRow < forest.length
                && nextCol >= 0
                && nextCol < forest[0].length
                && forest[nextRow][nextCol] !== 0
                && forest[nextRow][nextCol] !== visitedIdx
            ) {
                forest[nextRow][nextCol] = visitedIdx;
                queue.unshift([nextRow, nextCol, dist +  1]);
            }
        }
    }
    
    return -1;
};

// up down left right
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const addToHeap = (forest, minHeap) => {
    for(let i = 0; i < forest.length; i++) {
        for(let j = 0; j < forest[0].length; j++) {
            if(forest[i][j] > 1) minHeap.insert([i, j, forest[i][j]]);
        }
    }
    
    minHeap.sort();
}

// mock heap
class PriorityQueue {
    constructor(compareFunc) {
        this.compareFunc = compareFunc;
        this.heap = new Array();
    }
    
    insert(val) {
        this.heap.push(val);
    }
    
    sort() {
        this.heap.sort(this.compareFunc);
    }
    
    extract() {
        return this.heap.shift();
    }
    
    get size() {
        return this.heap.length;
    }
};
// @lc code=end

