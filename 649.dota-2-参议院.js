/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let sen = Array.from(senate,String);
    let count = 0;
    let cur = sen[0];
    while(true) {
        for(let i = 0; i < sen.length; i++) {
            if(sen[i] == '0') {
                continue;
            }
            if(cur == sen[i]){
                 count ++;
            }
            else {
                count --;
    
                if(count < 0) {
                    count = 1;
                    cur = sen[i];
                } 
                else {
                    sen[i] = '0';
                }
            }
        }
        let r = 0, d = 0;
        for(let i = 0; i < sen.length; i ++) {
            if(sen[i] == 'R') {
                r ++;
            }
            if(sen[i] == 'D'){
                 d ++;
            }
        }
        if(r == 0) {
            return "Dire";
    }
         if(d == 0) {
            return "Radiant";
    }
    }
}
// @lc code=end

