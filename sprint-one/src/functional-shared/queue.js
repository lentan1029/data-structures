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
