

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    var oldStorage = this._storage;
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
    oldStorage.each(function(item, index, collection) {
      this.insert(item); //what if we collide again and at line 11 we don't copy over all the items in the old collection
    });
  }
  this._storage.set(index, {k: v});

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index) ? this._storage.get(index)['k'] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

// if there isn't any collision for limit n, there won't be for limit 2*n.

/*
 * Complexity: What is the time complexity of the above functions?
 */


