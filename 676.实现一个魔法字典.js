/*
 * @lc app=leetcode.cn id=676 lang=javascript
 *
 * [676] 实现一个魔法字典
 */

// @lc code=start
function TrieNode(){
    this.children = new Map()
    this.endOfWord = false;
}

var MagicDictionary = function() {
    this.root = new TrieNode()
};

MagicDictionary.prototype.buildDict = function(dictionary) {
    for(let word of dictionary){
        let curr = this.root
        for(let letter of word){
            let map = curr.children
            if(!map.has(letter)) map.set(letter, new TrieNode())
            curr = map.get(letter)
        }
        curr.endOfWord = true
    }
};

MagicDictionary.prototype.search = function(searchWord){
    return  dfs(this.root, searchWord, 0, 0)
}

function dfs(root, str, i, count){
    if(count>1) return false
    if(i==str.length) return count == 1 && root.endOfWord
	
    for(let [char, node] of root.children){
        let c = 0;
        if(char != str[i]) c = 1
        if(dfs(node, str, i+1, count+c)) return true;
    }
    return false
}
/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end

