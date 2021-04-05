/*
Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

Do this in constant space and in one pass.
*/

/**
 *
 * @param {node} head
 * @param {number} k
 * @return {node}
 */
const removekthLast = (head, k) => {
  let front = head;
  let back = head;

  while (front) {
    if (k < 0) back = back.next;
    front = front.next;
    k -= 1;
  }

  if (back === head) {
    head = head.next;
    return head;
  } else {
    back.next = back.next.next;
    return head;
  }

};