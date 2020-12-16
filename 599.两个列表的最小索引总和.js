/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let out = [];
    let obj = new Map();
    list2.forEach((v, i) =>  obj.set(v, i));
    let i = 0, min = Infinity;
    while(i<list1.length){
        if(obj.has(list1[i])){
            let sum = i + obj.get(list1[i]);
            if(min===sum){
                out.push(list1[i]);
            }   
            else if(sum<min){
                out = [list1[i]];
                min = sum;
            }
        }
        i++;
    }
    
    return out;
};
// @lc code=end

