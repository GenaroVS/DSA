"""
Given a set of closed intervals, find the smallest set of numbers that covers all the intervals. If there are multiple smallest sets, return any of them.

For example, given the intervals [0, 3], [2, 6], [3, 4], [6, 9], one set of numbers that covers all these intervals is {3, 6}.
"""

# [0,3] [2,6] -> [2,3]
# [2,3] [3,4] -> [3]
# [3] -> [6,9] -> [[3], [6,9]]
# [[3], [6,9]] [7,12] -> [[3], [7,9]]
# [[3], [7,9]] [9,12] => [[3], [9]]
def intersecting(x, y):
    return not (x[0] > y[1] or y[0] > x[1])

def getCommonNums(intervals):
    compressed = []
    result = set()

    intervals.sort(key=lambda x: x)

    for interval in intervals:
        isolated = True
        for i, range in enumerate(compressed):
            if intersecting(interval, range):
                interval = [max(range[0], interval[0]), min(range[1], interval[1])]
                compressed[i] = interval
                isolated = False
                break

        if isolated: compressed.append(interval)

    for interval in compressed:
        result.add(interval[0])

    return result


intervals1 = [[0,3],[2,6],[3,4],[6,9]]
intervals2 = [[0,3],[2,6],[3,4],[6,9],[7,12],[8,10]]
print(getCommonNums(intervals1)) # {3, 6} or {3, 9}
print(getCommonNums(intervals2)) # {3, 8} or {3, 9}

