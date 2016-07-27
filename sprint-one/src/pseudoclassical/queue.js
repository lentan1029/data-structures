var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};

};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function () {
  if (this.length) {
    var output = this.storage[0];
    for (var i = 0; i < this.length; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[this.length - 1];
    this.length--;
    return output;
  }
};