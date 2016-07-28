var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.length = 0;
  newInstance.storage = {};

  // _.extend(newInstance, queueMethods);
  newInstance.size = queueMethods.size;
  newInstance.enqueue = queueMethods.enqueue;
  newInstance.dequeue = queueMethods.dequeue;

  return newInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  
  if (this.length) {
    var output = this.storage[0];
    
    for (var i = 1; i < this.length; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[this.length - 1];
    this.length--;
    return output;
  }
};