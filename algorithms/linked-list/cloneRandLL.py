"""
Given the head to a singly linked list, where each node also has a “random” pointer that points to anywhere in the linked list, deep clone the list.
"""
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

def cloneRandLL(head):
    if head.next == None:
        return Node(head.val)

    cur = head
    copyHead = None

    while (cur):
        copy = Node(cur.val)
        if cur == head:
            copyHead = copy

        temp = cur.next
        cur.next = copy
        copy.next= temp

        cur = cur.next.next

    cur = head
    while (cur and cur.next):
        if cur.random:
            cur.next.random = cur.random.next
        cur = cur.next.next

    cur = head
    copyCur = head.next
    while (cur or copyCur):
        if copyCur.next:
            copyCur.next = copyCur.next.next
            copyCur = copyCur.next
        if cur.next:
            cur.next = cur.next.next
            cur = cur.next

    return copyHead


