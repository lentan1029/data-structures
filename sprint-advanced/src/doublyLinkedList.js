var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //O(1)
    var newTail = Node(value);
    if (list.tail) {
      list.tail.next = newTail;
    } else {
      list.head = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function() { //O(1)
    var output = list.head.value;
    list.head = list.head.next;
    return output;
  };

  list.contains = function(target) { //O(n)
    var current = list.head;

    while (current) {

      if (current.value === target) {
        return true;
      }

      current = current.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
