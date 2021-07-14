"""
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
"""
from collections import defaultdict

# N = num_courses M = prereqs
def courseSchedule(num_courses, prerequisites):
    parents = defaultdict(set)
    children = defaultdict(set)

    # O(M)
    for prereq in prerequisites:
        parents[prereq[1]].add(prereq[0])
        children[prereq[0]].add(prereq[1])

    # O(N)
    queue = [i for i in range(num_courses) if not parents[i]]

    for i in queue:
        if parents[i]:
            return []
        for j in children[i]:
            parents[j].remove(i)
            if not parents[j]:
                queue.append(j),

    queue.reverse()
    return queue if len(queue) == num_courses else []





print(courseSchedule(4, [[1,0],[2,0],[3,1],[3,2]]))
print(courseSchedule(2, [[0,2],[1,2],[2,0]]))
