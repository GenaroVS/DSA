"""
Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?
"""

from typing import Sequence


def rotate(nums, k):
    N = len(nums)
    k = N - (abs(k) % N) if k < 0 else k % N

    for _ in range(k):
        first_element = nums[0]
        for i in range(N - 1):
            nums[i] = nums[i + 1]
        nums[N - 1] = first_element
    return nums

def rotate2(nums, k):
    N = len(nums)
    k = N - (abs(k) % N) if k < 0 else k % N

    reverse(nums, 0, k - 1)
    reverse(nums, k, N - 1)
    reverse(nums, 0, N - 1)
    return nums

def reverse(nums, i, j):
    while i < j:
        nums[i], nums[j] = nums[j], nums[i]
        i += 1
        j -= 1

print(rotate2([1,2,3,4,5,6], 2))
print(rotate2([1,2,3,4,5,6], 4))
print(rotate2([1,2,3,4,5,6], 6)) # should equal k = 1
print(rotate2([1,2,3,4,5,6], 8)) # should equal k = 2
print(rotate2([1,2,3,4,5,6], -2)) # should equal k = 4
