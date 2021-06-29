from collections import deque
"""
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
"""

def num_squares(n: int) -> int:
    if n < 2:
        return n

    perfects = []
    base = 1
    count = 0
    queue = deque([n])

    while base ** 2 <= n:
        perfects.append(base * base)
        base += 1

    while perfects:
        count += 1

        for _ in range(len(queue)):
            num = queue.popleft()

            for perf in perfects:
                if num == perf:
                    return count
                elif num > perf:
                    queue.append(num - perf)
                else:
                    break

    return count


print(num_squares(12)) # 3
print(num_squares(13)) # 2


