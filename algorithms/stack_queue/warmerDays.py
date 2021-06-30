
"""
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead
"""

def warmerDays(temperatures: list) -> list:
    """
    :param: list[int] : temperatures
    :return list[int]
    """
    answer = [0] * len(temperatures)
    stack = []

    for i, temp in temperatures:
        while stack and temperatures[stack[-1]] < temp:
            cur = stack.pop()
            answer[cur] = i - cur
        stack.append(i)

    return answer


