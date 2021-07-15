"""
Given the root of a binary search tree, and a target K, return two nodes in the tree whose sum equals K.

For example, given the following tree and K of 20
"""

def find_sum(root, k):
    if root == None:
        return None

    if contains(root, k - root.value):
        return (root.value, k - root.value)

    left = find_sum(root.left)
    right = find_sum(root.right)

    return left if left else right

def contains(root, target):

    while root:
        if root.value < target:
           root = root.right
        elif root.value > target:
            root = root.left
        elif root.value == target:
            return True
        else:
            break

    return False


