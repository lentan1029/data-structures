var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var child = Tree(value);

  this.children.push(child);
  // newTree.children = ;  // fix me
};

treeMethods.contains = function(target) {

  var res = false;
  
  var checkTree = function(tree) {
    if (tree.value === target) {
      res = true;
    }
  };

  var traverseTree = function(tree) {
    checkTree(tree);
    for (var i = 0; i < tree.children.length; i++) {
      traverseTree(tree.children[i]);
    }
  };

  traverseTree(this);


  return res;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
