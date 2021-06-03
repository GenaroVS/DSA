
const invert = (root) => {
  if (root === null) return null;

  root.left = invert(root.right);
  root.right = invert(root.left);

  return root;
};