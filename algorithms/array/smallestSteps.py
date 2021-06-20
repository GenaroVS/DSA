"""
You are in an infinite 2D grid where you can move in any of the 8 directions
You are given a sequence of points and the order in which you need to cover the points.
Give the minimum number of steps in which you can achieve it. You start from the first point.
"""

def calc_steps(x1, y1, x2, y2):
  xDif = abs(x2 - x1)
  yDif = abs(y2 - y1)

  if xDif >= yDif:
    return xDif
  if yDif > xDif:
    return yDif




def smallest_steps(points):
  """
  :param: tuple[] => points
  :return: int
  """
  steps = 0

  for i,point in enumerate(points):
    if i == len(points) - 1:
      continue

    x1, y1 = point
    x2, y2 = points[i + 1]

    steps += calc_steps(x1, y1, x2, y2)

  return steps




points1 = [(0,0),(1,1),(1,2)]
print(smallest_steps(points1))
points2 = [(0,0),(5,4),(-3,8)]
print(smallest_steps(points2))