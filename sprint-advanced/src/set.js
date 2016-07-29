var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'function') {
    this._storage[item.toString()] = true;
  } else {
    this._storage[JSON.stringify(item)] = true;
  }
};

setPrototype.contains = function(item) {
  if (typeof item === 'function') {
    return !!this._storage[item.toString()];
  } else {
    return !!this._storage[JSON.stringify(item)];
  }
};

setPrototype.remove = function(item) {
  if (typeof item === 'function') {
    delete this._storage[item.toString()];
  } else {
    delete this._storage[JSON.stringify(item)];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
