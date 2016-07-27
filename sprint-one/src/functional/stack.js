var Stack = function() {
  var someInstance = {};
  
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size - 1] = value;
  };


  someInstance.pop = function() {
    if (size > 0) {
      var output = storage[size - 1];
      delete storage[size - 1];
      size--;
      return output;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
