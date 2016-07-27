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
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
