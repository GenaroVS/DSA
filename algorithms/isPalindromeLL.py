# Determine whether a doubly linked list is a palindrome.
# What if it’s singly linked?

def isPalindrome(head):
  '''
  Check if singly linked list is a palindrome
  :param: node : head
  :return: bool
  '''
  slow = head
  fast = head

  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next

  cur = slow
  while cur and cur.next:
    temp = cur.next
    cur.next = cur.next.next
    temp.next = slow
    slow = temp

  cur = head

  while slow:
    if slow.val != cur.val:
      return False

    cur = cur.next
    slow = slow.next

  return True


