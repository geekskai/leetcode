/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = [];
    if (words.length > 0) {
        const wordsCount = words.length;
        const wordLength = words[0] ? words[0].length : 0;
        const offset = wordLength * (wordsCount - 1);
        const map = createHashTable(words);

        for (let i = 0; i < wordLength; i++) {
            let wordsFound = 0;
            let tempMap = new Map();

            let sequenceStart = i;

            const endLength = s.length - wordLength;
            for (let j = i; j <= endLength; j += wordLength) {
                const word = s.substr(j, wordLength);
                const wordEntriesNeeded = map.get(word);
                const wordEntriesUsed = tempMap.get(word);
                if (wordEntriesUsed !== wordEntriesNeeded) {
                    wordsFound++;
                    tempMap.set(word, wordEntriesUsed ? wordEntriesUsed + 1 : 1);
                } else if (!wordEntriesNeeded) {
                    wordsFound = 0;
                    tempMap = new Map();
                    sequenceStart = j + wordLength;
                } else {
                    let wordToRemove;

                    do {
                        wordToRemove = s.substr(sequenceStart, wordLength);
                        sequenceStart += wordLength;
                        tempMap.set(wordToRemove, tempMap.get(wordToRemove) - 1);
                        wordsFound--;
                    }
                    while (wordToRemove !== word && sequenceStart <= j);

                    wordsFound++;
                    tempMap.set(word, tempMap.get(word) + 1);
                }
                if (wordsFound === wordsCount) {
                    result.push(j - offset);
                }
            }
        }
    }
    return result;
};

const createHashTable = (words) => {
    const map = new Map();
    words.forEach(word => {
        const oldValue = map.get(word);
        if (map.has(word)) {
            map.set(word, oldValue + 1);
        } else {
            map.set(word, 1);
        }
    });
    return map;
}
// @lc code=end

