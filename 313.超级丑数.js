/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {

  let indeces = [];
  let currents = [];
  let i, l;
  // fill up our indeces array with zeroes to start
  for (i = 0, l = primes.length; i < l; i++) {
      indeces[i] = 0;
  }
  let out = [1]; // we will record or prime multiples here
  
  while (!out[n-1]) { 
      // simply calculate the next multiple of all the primes
      for (i = 0, l = primes.length; i < l; i++) {
          currents[i] = out[indeces[i]] * primes[i]; 
          // so in the case of 2,3,5 , currents would come out as [2,3,5] first round.
          // Then we use 2 and increase the index of that prime. Next round it would calculate to [4,3,5], then use 3, then calculate to [4,6,5] etc
      }
      
      // select the lowest one next so we stay in order
      let next = Math.min(...currents);
      out.push(next);
      
      // and for that prime we increase the index so next round we find the next multiple of that prime
      for (i = 0, l = primes.length; i < l; i++) {
          if (next === out[indeces[i]] * primes[i]) {
              indeces[i] = indeces[i] + 1;
          }
      }
  }
  
  return out[n-1];
};
// @lc code=end

