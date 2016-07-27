var Queue = function() {
  var someInstance = {};

  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size-1] = value;
  };

  someInstance.dequeue = function() {
    var output = storage[0];
    for (i=1; i<size; i++) {
      storage[i-1] = storage[i];
    }
    delete storage[size-1];
    size--;
    return output;
  };

  someInstance.size = function() {
    return Math.max(size, 0);
  };

  return someInstance;
};
