var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var newHead = Node(value);
    if (list.head) {
      list.head.previous = newHead;
      newHead.next = list.head;
    } else {
      list.tail = newHead;
    }
    list.head = newHead;
  };

  list.addToTail = function(value) { //O(1)
    var newTail = Node(value);
    if (list.tail) {
      list.tail.next = newTail;
      newTail.previous = list.tail;
    } else {
      list.head = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function() { //O(1)
    var output = list.head.value;
    list.head = list.head.next;
    if (list.head) {
      list.head.previous = null;
    }
    return output;
  };

  list.removeTail = function() {
    var output = list.tail.value;
    list.tail = list.tail.previous;
    if (list.tail) {
      list.tail.next = null;
    }
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
