var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);

  newInstance.length = 0;
  newInstance.storage = {};

  return newInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};
