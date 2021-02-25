var contains = (l1, l2) => {
  if (!l1 || !l2) return false;

  var node1 = l1;
  var node2 = l2;

  while (node2) {
    var temp = node2;
    while (node1) {
      if (!node2) {
        return false;
      } else if (node1.val !== node2.val) {
        break;
      }
      node1 = node.next;
      node2 = node2.next;
    }

    if (!node1) {
      return true;
    }
    node2 = temp.next;
    node1 = l1;
  }

  return false;
};

