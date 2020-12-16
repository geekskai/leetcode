/*
 * @lc app=leetcode.cn id=861 lang=javascript
 *
 * [861] 翻转矩阵后的得分
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
/**
 * @param {number[][]} A
 * @return {number}
 */
const flipVal = (A, i, j) => {
    const val = A[i][j];
    if (val === 0) {
        A[i][j] = 1;
    } else {
        A[i][j] = 0;
    }
};

const binarySum = A => A.reduce((sum, row) => sum + parseInt(row.join(''), 2), 0);

const flipRows = A => {
    for (let i = 0; i < A.length; i++) {
        let firstVal = A[i][0];
        for (let j = 0; j < A[i].length; j++) {
            if (firstVal === 0) {
                flipVal(A, i, j);
            }
        }
    }
    return A;
};

const countZerosInCol = (A, i) => {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
        if (A[j][i] === 0) {
            count += 1;
        }
    }
    return count;
};

const flipCols = A => {
    for (let i = 0; i < A[0].length; i++) {
      let zeros = countZerosInCol(A, i);
        for (let j = 0; j < A.length; j++) {
            if (zeros > A.length / 2) {
                flipVal(A, j, i);
            }
        }
    }
    return A;
}

var matrixScore = function(A) {
    A = flipRows(A);
    A = flipCols(A);
    return binarySum(A);
};
// @lc code=end

