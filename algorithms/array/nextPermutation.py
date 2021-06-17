"""
Given a number represented by a list of digits, find the next greater permutation of a number, in terms of lexicographic ordering. If there is not greater permutation possible, return the permutation with the lowest value/ordering.
"""

def reverse(nums, a, b):
  nums[a:b + 1] = reversed(nums[a:b + 1])


def next_permutation(nums):
  left = len(nums) - 2
  right = len(nums) - 1

  while (left >= 0 and nums[left] >= nums[left + 1]):
    left -= 1

  if left >= 0:
    next_largest = len(nums) - 1
    while (next_largest > 0 and nums[next_largest] <= nums[left]):
        next_largest -= 1

    nums[left], nums[next_largest] = nums[next_largest], nums[left]

  reverse(nums, left + 1, right)

  return nums



print(next_permutation([2,1,3]))