/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    var nums = [];
    var alph = [];
    var res = [];
    for(var i=0;i<s.length;i++){
        if(s[i]>='0' && s[i]<='9'){
            nums.push(s[i]);
        }else{
            alph.push(s[i]);
        }
    }
    if(Math.abs(nums.length-alph.length)>1){
        return "";
    }
    if(nums.length>alph.length){
        while(nums.length>1){
            res.push(nums.shift());
            res.push(alph.shift());
        }
        res.push(nums.shift());
    }
    else if(nums.length<alph.length){
        while(alph.length>1){
            res.push(alph.shift());
            res.push(nums.shift());
        }
        res.push(alph.shift());
    }else{
         while(alph.length){
            res.push(alph.shift());
            res.push(nums.shift());
        }
    }
	return res.join("");
};
// @lc code=end

