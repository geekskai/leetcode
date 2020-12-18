/*
 * @lc app=leetcode.cn id=432 lang=javascript
 *
 * [432] 全 O(1) 的数据结构
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var AllOne = function() {
    this.pos = {}
    this.map = new Map();    
};

AllOne.prototype.inc = function(key) {
    if(!this.pos[0]) this.pos[0] = ""
    if(!this.map.has(key)){
        this.map.set(key, 1);
        if(!this.pos[1]){
            this.pos[1] = new Set();
        }
        this.pos[1].add(key);
    }else{
        let ind = this.map.get(key);
        this.pos[ind].delete(key);
        if(!this.pos[ind].size) delete this.pos[ind];
        this.map.set(key, this.map.get(key) + 1);
        ind = this.map.get(key);
        if(!this.pos[ind]){
            this.pos[ind] = new Set();
        }
        this.pos[ind].add(key);
    }
    
};

AllOne.prototype.dec = function(key) {
    if(this.map.has(key)){
        let ind = this.map.get(key);
        this.pos[ind].delete(key);
        if(!this.pos[ind].size) delete this.pos[ind];
        this.map.set(key, this.map.get(key) - 1);
        if(this.map.get(key) === 0) this.map.delete(key);
        else{
            ind = this.map.get(key);
            if(!this.pos[ind]){
                this.pos[ind] = new Set();
            }
            this.pos[ind].add(key);
        }
    }
};

AllOne.prototype.getMaxKey = function() {
    const arr = Object.keys(this.pos);
    if(arr.length <= 1) return '';
    return this.pos[arr[arr.length - 1]].values().next().value;
};

AllOne.prototype.getMinKey = function() {
    const arr = Object.keys(this.pos);
    if(arr.length <= 1) return '';
    return this.pos[arr[1]].values().next().value;
};
/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// @lc code=end

