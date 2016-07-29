var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.removeFromParent = function() {
  var siblings = this.parent.children;

  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] === this) {
      siblings.splice(i, 1);
      break;
    }
  }
  this.parent = null;
};

treeMethods.addChild = function(value) { //O(1)
  // your code here
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
  // newTree.children = ;  // fix me
};

treeMethods.contains = function(target) { //O(n)

  var res = false;
  
  var checkTree = function(tree) {
    if (tree.value === target) {
      res = true;
    }
  };

  this.traverseTree(this, checkTree);


  return res;
};

treeMethods.traverseTree = function(tree, cb) {
  cb(tree);
  for (var i = 0; i < tree.children.length; i++) {
    this.traverseTree(tree.children[i], cb);
  }
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
