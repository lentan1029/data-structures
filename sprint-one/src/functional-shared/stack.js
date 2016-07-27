

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.length = 0;
  newInstance.storage = {};
  // console.log(stackMethods);
  _.extend(newInstance, stackMethods);

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.size = function() {
  return this.length;
};

