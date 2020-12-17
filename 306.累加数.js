/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    if(num.length < 3) return false;
    let str = "";
    let seen = true;
    for(let i = num.length - 1; i > 1; i--){
        str = `${num[i]}${str}`;
        if(num[i] === "0") continue;
        let s = str;
        let s2 = num[i - 1]
        for(let j = i - 2; j >= 0; j--){
            if(`${s2}`.startsWith("0") && s2.length > 1){
                s2 = `${num[j]}${s2}`  
                seen = false;
            } else if(parseInt(s) >= parseInt(s2)){
                let diff = s - s2;
                if(num.slice(0, j + 1).endsWith(diff)){
                    s = s2;
                    s2 = diff;
                    let ind = Math.floor(Math.log10(diff));
                    ind = ind < 0 ? 0 : ind
                    j -= ind;
                    seen = true;
                }else {
                    s2 = `${num[j]}${s2}`
                    seen = false;
                }
            }else{
                seen = false;
                break;
            }
        }
        if(seen) return seen;
    }
    return seen;
};
// @lc code=end

