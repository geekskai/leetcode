/*
 * @lc app=leetcode.cn id=284 lang=javascript
 *
 * [284] 顶端迭代器
 */
/**
 * @param {Iterator} iterator
 */
 var PeekingIterator = function(iterator) {
  this._iterator = iterator;
  this._peek = this._iterator.next()
};

/**
* @return {number}
*/
PeekingIterator.prototype.peek = function() {
  return this._peek;
};

/**
* @return {number}
*/
PeekingIterator.prototype.next = function() {
  let peek = this._peek;
  this._peek = this._iterator.hasNext() ? this._iterator.next() : null
  return peek;
};

/**
* @return {boolean}
*/
PeekingIterator.prototype.hasNext = function() {
  return (typeof this._peek) === 'number'
};

// @lc code=end

