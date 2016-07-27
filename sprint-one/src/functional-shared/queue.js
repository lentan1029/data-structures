var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newInstance = {};
  newInstance.length = 0;
  newInstance.storage = {};

  _.extend(newInstance, queueMethods);

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
  var output = this.storage[0];
  
  for (var i = 1; i < this.length; i++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[this.length - 1];
  this.length--; //[.2,3,4,5]
  return output;
};