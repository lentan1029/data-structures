var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

BinarySearchTree.prototype.insert = function(newValue) {

  if (newValue < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(newValue);
    } else {
      this.left.insert(newValue);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(newValue);
    } else {
      this.right.insert(newValue);
    }
  }
};

BinarySearchTree.prototype.contains = function() {};

BinarySearchTree.prototype.depthFirstLog = function() {};

/*
 * Complexity: What is the time complexity of the above functions?
 */
