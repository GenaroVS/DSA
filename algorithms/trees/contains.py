"""
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
"""

def contains(s, t):
    def is_equal(a, b):
        if a == None and b == None:
            return True
        if a == None or b == None:
            return False
        if a.value != b.value:
            return False

        return is_equal(a.left, b.left) and is_equal(a.right, b.right)

    if s == None:
        return False

    stack = [s]

    while len(stack):
        node = stack.pop()

        if node.value == t.value and is_equal(node, t):
            return True

        if node.left: stack.append(node.left)
        if node.right: stack.append(node.right)

    return False

