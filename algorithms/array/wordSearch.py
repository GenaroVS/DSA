"""
Given a 2D board of characters and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once
"""


def word_search(board, word):
  """
  :str[][]: board
  :str: word
  """

  def helper(board, word, y, x, idx, visited):
    if visited.contains((y, x)):
      return None
    if idx == len(word):
      return True

    char = word[idx]
    visited.add((y, x))

    if y > 0 and board[y - 1][x] == char:
      top = helper(board, word, y - 1, x, idx + 1)
    if y < len(board) - 1 and board[y + 1][x] == char:
      bottom = helper(board, word, y + 1, x, idx + 1)
    if x > 0 and board[y][x - 1] == char:
      left = helper(board, word, y, x - 1, idx + 1)
    if x < len(board[y]) - 1 and board[y][x + 1] == char:
      right = helper(board, word, y, x + 1, idx + 1)

    visited.remove((y, x))

    if top or bottom or left or right:
      return True


  for i,row in enumerate(board):
    for j,char in enumerate(row):
      if char == word[0]:
        visited = set()
        if helper(board, word, i, j, 1, visited):
          return True

  return False