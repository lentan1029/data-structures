var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

BinarySearchTree.prototype.insert = function(newValue) { //O(log n)

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

BinarySearchTree.prototype.contains = function(input) { //O(log n)
  var res = false;

  var treeTraverse = function(node, value) {
    if (node !== null) {
      if (node.value === value) {
        res = true;
      }
      if (value < node.value) {
        treeTraverse(node.left, value);
      } else {
        treeTraverse(node.right, value);
      }
    }
  };

  treeTraverse(this, input);

  return res;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) { //O(n)
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
