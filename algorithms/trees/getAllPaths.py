
def getAllPaths(root, paths, path):
    """
    Given a binary tree, Get all paths from a root to leaves
    :param:node: root
    :return: int[][]
    """
    paths = []

    def helper(root, path):
        if path == None: path = []
        if root == None: return

        path.append(root.value)

        if not root.left and not root.right:
            paths.append(path)
            return

        helper(root.left, path)
        helper(root.right, path)

    helper(root, [])
    return paths