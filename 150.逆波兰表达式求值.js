/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  // If the token is an operator, the operands will be
  // the last two items on the stack.
  // Evaluate the expression then add the value back on to the stack,
  // as it will be the operand for the next expression.
  // Otherwise, its an operand (digit). Cast to number and add to stack.
  tokens.forEach((token) => {
    if (/^[+\-*/]$/.test(token)) {
      const [y, x] = [stack.pop(), stack.pop()];
      stack.push(evaluate(x, y, token));
    } else {
      stack.push(+token); // Number(token)
    }
  });

  // The last evaluated expression is the answer
  return stack.pop();
};

const evaluate = (x, y, op) => {
  switch (op) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return (x / y) | 0; // Math.trunc()
  }
};
// @lc code=end
