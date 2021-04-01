// Given the head of a singly linked list, return true if it is a palindrome.

/**
 * @param {node} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  var slow = head;
  var fast = head;

  while (fast.next && fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  var cur = slow;
  while (current && current.next) {
    var temp = cur.next;
    cur.next = cur.next.next;
    temp.next = slow;
    slow = temp;
  }

  cur = head;
  while (slow) {
    if (slow.val !== cur.val) {
      return false;
    }
  }
};