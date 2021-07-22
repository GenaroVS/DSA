"""
Given a node in a binary search tree, return the next bigger element, also known as the inorder successor.
You can assume each node has a parent pointer.
"""
class Node:
    def __init__(self, val, left = None, right = None, parent = None):
        self.val = val
        self.left = left
        self.right = right
        self.parent = parent

def nextBigger(node: 'Node'):
    if node.right:
        node = node.right
        while node.left:
            node = node.left

        return node

    parent = node.parent

    while parent and parent.left != node:
        node = parent
        parent = node.parent

    return parent

