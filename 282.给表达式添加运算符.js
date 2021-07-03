/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
/*
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
const addOperators = (num, target)=>{
  let res=[],ans=[];
  const findRes=(num0,k)=>{
      if(num0.length<1) return;
      let flag=(num0.length>1&&num0[0]!=='0')||(num0.length===1);
      if(flag&&eval(`${res.slice(0,k).join('')}${num0}`)===target){
          res[k]=num0;
          ans.push(res.slice(0,k+1).join(''));
      }else{
          for(let i=0;i<num0.length;i++){
              res[k]=num0.slice(0, i + 1);
              res[k+1]='+';
              findRes(num0.slice(i + 1), k+2);
              res[k+1]='-';
              findRes(num0.slice(i + 1), k+2);
              res[k+1]='*';
              findRes(num0.slice(i + 1),k+2);
              if(num0[0]==='0') break;
          }
      }
  };
  findRes(num,0);
  return ans;
};


// @lc code=end

