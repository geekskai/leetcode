/*
 * @lc app=leetcode.cn id=770 lang=javascript
 *
 * [770] 基本计算器 IV
 *
 * https://leetcode-cn.com/problems/basic-calculator-iv/description/
 *
 * algorithms
 * Hard (55.30%)
 * Likes:    39
 * Dislikes: 0
 * Total Accepted:    1.3K
 * Total Submissions: 2.2K
 * Testcase Example:  '"e + 8 - a + 5"\n["e"]\n[1]'
 *
 * 给定一个表达式 expression 如 expression = "e + 8 - a + 5" 和一个求值映射，如 {"e": 1}（给定的形式为
 * evalvars = ["e"] 和 evalints = [1]），返回表示简化表达式的标记列表，例如 ["-1*a","14"]
 *
 *
 * 表达式交替使用块和符号，每个块和符号之间有一个空格。
 * 块要么是括号中的表达式，要么是变量，要么是非负整数。
 * 块是括号中的表达式，变量或非负整数。
 * 变量是一个由小写字母组成的字符串（不包括数字）。请注意，变量可以是多个字母，并注意变量从不具有像 "2x" 或 "-x" 这样的前导系数或一元运算符
 * 。
 *
 *
 * 表达式按通常顺序进行求值：先是括号，然后求乘法，再计算加法和减法。例如，expression = "1 + 2 * 3" 的答案是 ["7"]。
 *
 * 输出格式如下：
 *
 *
 * 对于系数非零的每个自变量项，我们按字典排序的顺序将自变量写在一个项中。例如，我们永远不会写像 “b*a*c” 这样的项，只写 “a*b*c”。
 * 项的次数等于被乘的自变量的数目，并计算重复项。(例如，"a*a*b*c" 的次数为
 * 4。)。我们先写出答案的最大次数项，用字典顺序打破关系，此时忽略词的前导系数。
 * 项的前导系数直接放在左边，用星号将它与变量分隔开(如果存在的话)。前导系数 1 仍然要打印出来。
 * 格式良好的一个示例答案是 ["-2*a*a*a", "3*a*a*b", "3*b*b", "4*a", "5*c", "-6"] 。
 * 系数为 0 的项（包括常数项）不包括在内。例如，“0” 的表达式输出为 []。
 *
 *
 *
 *
 * 示例：
 *
 * 输入：expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]
 * 输出：["-1*a","14"]
 *
 * 输入：expression = "e - 8 + temperature - pressure",
 * evalvars = ["e", "temperature"], evalints = [1, 12]
 * 输出：["-1*pressure","5"]
 *
 * 输入：expression = "(e + 8) * (e - 8)", evalvars = [], evalints = []
 * 输出：["1*e*e","-64"]
 *
 * 输入：expression = "7 - 7", evalvars = [], evalints = []
 * 输出：[]
 *
 * 输入：expression = "a * b * c + b * a * c * 4", evalvars = [], evalints = []
 * 输出：["5*a*b*c"]
 *
 * 输入：expression = "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c -
 * a))",
 * evalvars = [], evalints = []
 *
 * 输出：["-1*a*a*b*b","2*a*a*b*c","-1*a*a*c*c","1*a*b*b*b","-1*a*b*b*c","-1*a*b*c*c","1*a*c*c*c","-1*b*b*b*c","2*b*b*c*c","-1*b*c*c*c","2*a*a*b","-2*a*a*c","-2*a*b*b","2*a*c*c","1*b*b*b","-1*b*b*c","1*b*c*c","-1*c*c*c","-1*a*a","1*a*b","1*a*c","-1*b*c"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * expression 的长度在 [1, 250] 范围内。
 * evalvars, evalints 在范围 [0, 100] 内，且长度相同。
 *
 *
 */

// @lc code=start
/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
class Unit {
  constructor(count, val = []) {
    this.count = count;
    this.val = val;
    this.val.sort();
    this.valStr = this.val.join("*");
  }
  product(u1 = new Unit()) {
    return new Unit(this.count * u1.count, this.val.concat(u1.val));
  }
  toString() {
    return this.count + (this.valStr ? "*" + this.valStr : "");
  }
}
class Exp {
  /**
   *
   * @param {Unit[]} children
   */
  constructor(children = []) {
    this.children = [];
    this.dic = new Map();
    for (let child of children) this.addUnit(child);
  }

  addUnit(u = new Unit()) {
    let { dic, children } = this;
    if (dic.has(u.valStr)) children[dic.get(u.valStr)].count += u.count;
    else {
      dic.set(u.valStr, children.length);
      children.push(u);
    }
  }

  product(exp1 = new Exp()) {
    let exp = new Exp();
    this.children.forEach((x) => {
      exp1.children.forEach((y) => {
        exp.addUnit(x.product(y));
      });
    });
    return exp;
  }

  add(exp1 = new Exp()) {
    exp1.children.forEach((x) => this.addUnit(x));
    return this;
  }

  toArray() {
    let group = new Map();
    for (let x of this.children) {
      if (!group.has(x.val.length)) group.set(x.val.length, []);
      x.count != 0 && group.get(x.val.length).push(x);
    }
    let groupArr = [...group.entries()].sort((a, b) => b[0] - a[0]);
    return groupArr
      .map(([_, x]) => {
        x.sort((a, b) => a.valStr.localeCompare(b.valStr));
        return x.map((x) => x.toString());
      })
      .flat();
  }
}

/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
var basicCalculatorIV = function (expression, evalvars, evalints) {
  let tokens = toTokens(expression).map((x) =>
      /^\d+$/.test(x) ? Number.parseInt(x) : x
    ),
    vals = toVarDic(evalvars, evalints),
    i = 0;

  let exp = nextExp();
  return exp.toArray();

  function nextExp() {
    if (i >= tokens.length) return undefined;
    let [exp, op1] = [nextUnit(), nextOperator()];
    if (!op1 || op1 == ")") return exp;
    let exp1 = nextUnit();
    while (true) {
      let op2 = nextOperator();
      if (!op2 || op2 == ")") return dealDefault();
      let exp2 = nextUnit();
      switch (op2) {
        case "+":
        case "-":
          exp = dealDefault();
          op1 = op2;
          exp1 = exp2;
          continue;
        case "*":
          exp1 = exp1.product(exp2);
          continue;
        default:
          return dealDefault();
      }
      function dealDefault() {
        switch (op1) {
          case "+":
            return exp.add(exp1);
          case "-":
            let expz = exp1.product(new Exp([new Unit(-1, [])]));
            return exp.add(expz);
          case "*":
            return exp.product(exp1);
        }
        debugger;
      }
    }
  }

  /**
   * @returns {Exp}
   */
  function nextUnit() {
    if (i >= tokens.length) return undefined;
    let rtn;
    if (tokens[i] == "(") {
      i++;
      return nextExp();
    } else if (Number.isInteger(tokens[i]))
      rtn = new Exp([new Unit(tokens[i], [])]);
    else if (vals.has(tokens[i]))
      rtn = new Exp([new Unit(vals.get(tokens[i]), [])]);
    else rtn = new Exp([new Unit(1, [tokens[i]])]);
    i++;
    return rtn;
  }
  function nextOperator() {
    if (i >= tokens.length) return undefined;
    let op = tokens[i];
    i++;
    return op;
  }
};

function toTokens(str = "") {
  let tokens = [],
    tmp = "",
    keyWords = {
      "(": true,
      ")": true,
      "+": true,
      "*": true,
    };
  for (let char of str) {
    if (keyWords[char]) {
      if (tmp) tokens.push(tmp);
      tokens.push(char);
      tmp = "";
      continue;
    }
    if (char == " ") {
      if (tmp) {
        tokens.push(tmp);
        tmp = "";
      }
      continue;
    }
    tmp += char;
  }
  if (tmp) tokens.push(tmp);
  return tokens;
}

function toVarDic(keys = [], vals = []) {
  let dic = new Map();
  for (let i = 0; i < keys.length; i++) {
    dic.set(keys[i], vals[i]);
  }
  return dic;
}

// @lc code=end
