def largestBST(root):
  """
  Given a tree, find the largest tree/subtree that is a BST.
  Given a tree, return the size of the largest tree/subtree that is a BST.
  :node: root
  """
  max_size = 0
  max_root = None

  def helper(root):
    if (root == None): return (0, float('inf'), float('-inf'))
    nonlocal max_size
    nonlocal max_root

    left = largestBST(root.left)
    right = largestBST(root.right)

    if root.value > left[2] and root.value < right[1]:
      size = left[0] + right[0] + 1
      if size > max_size:
        max_size = size
        max_root = root
      return (size, min(root.value, left[1]), max(root.value, right[2]))
    else:
      return (0, float('-inf'), float('inf'))

  helper(root)
  return (max_root, max_size)



