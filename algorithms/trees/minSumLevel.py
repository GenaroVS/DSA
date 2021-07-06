# Given a binary tree, return the level of the tree with minimum sum.
from collections import deque

def minSumLevel(root):
    queue = deque((root, 0))
    min_sum = float('inf')
    local_sum = 0
    prev_node_level = 0

    while len(queue):
        node, level = queue.popleft()

        if level == prev_node_level:
            local_sum += node.value
        else:
            min_sum = min(min_sum, local_sum)
            local_sum = node.value

        prev_node_level = level
        if node.left: queue.append((node.left, level + 1))
        if node.right: queue.append((node.right, level + 1))

    min_sum = min(min_sum, local_sum)
    return min_sum