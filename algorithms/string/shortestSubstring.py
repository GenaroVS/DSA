"""
Given a string and a set of characters, return the shortest substring containing all the characters in the set.
For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".
If there is no substring containing all the characters in the set, return null.
"""

def shortestSubstring(string, chars):
  """
  Given a string and a set of characters, return the shortest substring containing all the characters in the set.
  :param: str : string
  :param: set : chars
  :return: str
  """

  shortestSubstring = None
  shortestLen = len(string) + 1

  for i, char in enumerate(string):
    if char in chars:
      matches = set()
      matches.add(char)
      j = i + 1

      while j < len(string):
        if string[j] in chars:
          matches.add(string[j])
        if not chars.difference(matches):
          if shortestLen > (j - i):
            shortestLen = j - i
            shortestSubstring = (i, j)
          break
        if j - i > shortestLen:
          break;

        j += 1


  if shortestSubstring:
    start, end = shortestSubstring
    return string[start:end + 1]

  return None




test1 = 'figehaeci'
print(shortestSubstring(test1, set('aei')))