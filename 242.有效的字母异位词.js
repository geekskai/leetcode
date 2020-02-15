/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (55.81%)
 * Likes:    114
 * Dislikes: 0
 * Total Accepted:    49.3K
 * Total Submissions: 88K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// s = "anagram", t = "nagaram"
var isAnagram = function (s, t) {
    let map = new Map()
    for (let index = 0; index < 26; index++) {
        map.set(String.fromCharCode(97 + index), 0)
    }
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1)
        }
    }

    return [...map.values()].every((it) => it == 0)

    // const map = {};
    // s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
    // t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
    // return Object.keys(map).every(k => map[k] === 0);
};
// @lc code=end

