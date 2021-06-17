"""
We're given a hashmap associating each courseId key with a list of courseIds values, which represents that the prerequisites of courseId are courseIds. Return a sorted ordering of courses such that we can finish all courses.

Return null if there is no such ordering.
"""

def order_courses(courses):
  parents = {}
  childs = {p: set(c) for p,c in courses.items()}
  order = []
  no_prereqs = []

  for key,prereqs in courses.items():
    if len(courses[key]) == 0:
      no_prereqs.append(key)

    for course in prereqs:
      if course in parents:
        parents[course].append(key)
      else:
        parents[course] = [key]

  while no_prereqs:
    prereq = no_prereqs.pop()
    order.append(prereq)

    for course,parent in parents.items():
      childs[parent].remove(prereq)
      if not childs[parent]:
        no_prereqs.append(parent)

  if len(order) != len(courses):
    return None

  return order




courses_map = {
  'CSC300': ['CSC100', 'CSC200'],
  'CSC200': ['CSC100'],
  'CSC100': []
}
print(order_courses(courses_map)) # CSC100, CSC200, CSC300