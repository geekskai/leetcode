/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */
/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
  this.maxHeap = new Heap(Heap.maxComparator);
  this.minHeap = new Heap(Heap.minComparator);
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  if(this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
      this.maxHeap.add(num);
  } else {
      this.minHeap.add(num);
  }
  
  if(this.maxHeap.size - this.minHeap.size > 1) {
      this.minHeap.add(this.maxHeap.poll());
  } else if(this.minHeap.size - this.maxHeap.size > 1) {
      this.maxHeap.add(this.minHeap.poll());
  }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if(this.maxHeap.size > this.minHeap.size) {
      return this.maxHeap.peek();
  } else if(this.maxHeap.size < this.minHeap.size) {
      return this.minHeap.peek();
  } else {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
};

/** 
*  custom Heap class
*/
class Heap {
constructor(comparator) {
  this.size = 0;
  this.values = [];
  this.comparator = comparator || Heap.minComparator;
}

add(val) {
  this.values.push(val);
  this.size ++;
  this.bubbleUp();
}

peek() {
  return this.values[0] || null;
}

poll() {
  const max = this.values[0];
  const end = this.values.pop();
  this.size --;
  if (this.values.length) {
    this.values[0] = end;
    this.bubbleDown();
  }
  return max;
}

bubbleUp() {
  let index = this.values.length - 1;
  let parent = Math.floor((index - 1) / 2);

  while (this.comparator(this.values[index], this.values[parent]) < 0) {
    [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
    index = parent;
    parent = Math.floor((index - 1) / 2);
  }
}

bubbleDown() {
  let index = 0, length = this.values.length;

  while (true) {
    let left = null,
      right = null,
      swap = null,
      leftIndex = index * 2 + 1,
      rightIndex = index * 2 + 2;

    if (leftIndex < length) {
      left = this.values[leftIndex];
      if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
    }

    if (rightIndex < length) {
      right = this.values[rightIndex];
      if ((swap !== null && this.comparator(right, left) < 0) || (swap === null && this.comparator(right, this.values[index]))) {
        swap = rightIndex;
      }
    }
    if (swap === null) break;

    [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
    index = swap;
  }
}
}

/** 
*  Min Comparator
*/
Heap.minComparator = (a, b) => { return a - b; }

/** 
*  Max Comparator
*/
Heap.maxComparator = (a, b) => { return b - a; }

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

