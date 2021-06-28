/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var countObject = {};//contains each letters count in string
    var isInStack = {};//tells whether a letter is already in the stack or not
    var stack = [];//the final stack which will contain the string
    
    //build countObject and initialize isInStack
    for(var i=0; i<s.length; i++){
        if(!countObject[s[i]]){
            countObject[s[i]] = 0;
        }
        countObject[s[i]]++;
        isInStack[s[i]] = false;
    }
    
    //iterate through string
    for(var i=0; i<s.length; i++){
        var currentLetter = s[i];
        var stackTop = stack[stack.length - 1];
        
        //decrement counter for every letter each time we see it
        countObject[currentLetter]--;
        
        if(isInStack[currentLetter]){
            //currentLetter is already in stack. Skip it.
            continue;
        }
        
        if(currentLetter < stackTop){
            //currentLetter comes first lexicographically
            //do more of the stacktop element exist further in the string?
            //(we can find this out from countObject)
            //keep popping while currentLetter < stackTop
            //or if stackTop does not exist further in the string
            while(currentLetter < stackTop && countObject[stackTop] > 0){
                isInStack[stack.pop()] = false;
                stackTop = stack[stack.length - 1];
            }
            
            //the stack top should now have a letter which is either lexicographically
            //smaller than currentLetter or 
            //a letter which does not have any more occurrences in the string
            //for example in bbacd, when currentLetter is a, stack top would be b
        }
        
        //push the currentLetter to stack
        isInStack[currentLetter] = true;
        stack.push(currentLetter);
    }
    
    //convert stack arrray to string and return
    return stack.join('');
}
// @lc code=end

