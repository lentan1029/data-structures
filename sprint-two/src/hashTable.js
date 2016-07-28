

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); 
  this._isHashing = false;
};

HashTable.prototype.insert = function(k, v) {
  if (!this._isHashing) {
    this.double();
  }
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    this._storage.get(index)[k] = v;
  } else {
    var item = {};
    item[k] = v;
    this._storage.set(index, item);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    return this._storage.get(index)[k];
  }
};

HashTable.prototype.remove = function(k) {
  if (!this._isHashing) {
    this.halve(k);
  }
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  
};

HashTable.prototype.double = function() {
  var counter = 0;
  for (var i = 0; i < this._limit; i++) {
    if (this._storage.get(i)) {
      counter++;
    }
  }
  if (counter > (this._limit / 2)) {
    this._isHashing = true;
    var oldStorage = this._storage; //TODO: what happens if we resize twice? how can insert everything before resizing?
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    var that = this;
    oldStorage.each(function(item, index, collection) {
      for (var key in item) {
        if (item.hasOwnProperty(key)) {
          that.insert(key, item[key]); //TODO: what does the this keyword refer to?
        }
      }
    });
    this._isHashing = false;
  } 
};

HashTable.prototype.halve = function(k) {

  var counter = 0;
  for (var i = 0; i < this._limit; i++) {

    if (this._storage.get(i)) {
      counter++;
    }
  }
  if (counter < (this._limit / 4)) {
    this._isHashing = true;

    var oldStorage = this._storage;
    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);
    var that = this;
    oldStorage.each(function(item, index, collection) {
      for (var key in item) {
        if (item.hasOwnProperty(key)) {
          that.insert(key, item[key]); //TODO: what does the this keyword refer to?
        }
      }
    });
    this._isHashing = false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

