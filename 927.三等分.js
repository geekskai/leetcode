/*
 * @lc app=leetcode.cn id=927 lang=javascript
 *
 * [927] 三等分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
    const getOneCount = () => {
        const oneCount = A.reduce((acc, bit) => bit == 1 ? acc + 1 : acc, 0)
        if(oneCount % 3 == 0) 
            return oneCount / 3
        return -1
    }

    const getTail = oneCount => { 
        let zeroCount = 0, idx = A.length -1
        let oneRemain = oneCount
        while(oneRemain > 0) {
            if(A[idx] == 1) {
                oneRemain--
            }
            if(A[idx] == 0 && oneRemain == oneCount) {
                zeroCount++
            }
            idx--
        }
        return {zeroCount, tailStart: idx + 1}
    }

    const getHead = (oneCount, zeroCount) => {
        let idx = 0
        while(oneCount > 0) {
            if(A[idx] == 1)
                oneCount--
            idx++
        }
        if(zeroCount > 0) {
            while(A[idx] == 0 && zeroCount > 0){
                idx++
                zeroCount--
            }
        }
        return zeroCount == 0 ? idx-1 : -1
    }

    const getMiddle = (oneCount, headEnd, tailStart) => {
        let idx = headEnd + 1
        let tailIdx = tailStart
        while(A[idx] != 1) idx++
        while(idx < tailStart && A[idx] == A[tailIdx]) {
            idx++
            tailIdx++
        }
        if(tailIdx != A.length)
            return -1
        return idx

    }

    const oneCount = getOneCount()
    if(oneCount == -1 || A.length < 3)
        return [-1, -1]
    if(oneCount == 0) return [0, A.length-1]
    const {tailStart, zeroCount} = getTail(oneCount)
    const headEnd = getHead(oneCount, zeroCount)
    if(headEnd == -1)
        return [-1, -1]
    const middleEnd = getMiddle(oneCount, headEnd, tailStart)
    if(middleEnd == -1)
        return [-1, -1]
    return [headEnd, middleEnd]
};
// @lc code=end

