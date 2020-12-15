/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    if(N<=9) return N;

	let digitals = Array.from(String(N), Number);

	let compareDigital = digitals[0]
	let decreasingIndex

	for(let i=1; i<digitals.length; i++){

		if(digitals[i]<compareDigital){
			decreasingIndex = i
			break
		}else{
			compareDigital = digitals[i]
		}
	}
	for(let m=decreasingIndex; m<digitals.length; m++){
		digitals[m] = 9
	}
	for(let j=decreasingIndex-1; j>=0; j--){
		if(j==0 && digitals[j]==1) {
			digitals.shift()
			break
		}else if(j==0){
			digitals[j] = digitals[j]-1
			break
		}else{
			if(digitals[j]-1<digitals[j-1]){
				digitals[j] = 9
			}else{
				digitals[j] = digitals[j]-1
				break
			}
		}
	}
	return parseInt(digitals.join(''))

};
// @lc code=end

