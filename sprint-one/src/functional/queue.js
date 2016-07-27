var Queue = function() {
  var someInstance = {};

  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
  };

  someInstance.dequeue = function() {
    size--;
  };

  someInstance.size = function() {
    return Math.max(size, 0);
  };

  return someInstance;
};