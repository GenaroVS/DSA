# Given an unsorted array of integers,
# find the length of the longest consecutive elements sequence.

def longest_consecutive_seq(nums):
  """
  :int[]: nums
  """
  largestSet = 0

  nums = set(nums)

  for num in nums:
    if num - 1 not in nums:
      end = num + 1
      while end in nums:
        end += 1
      largestSet = max(largestSet, end - num)

  return largestSet






list = [100,4,200,1,3,2,101,102,103,104] # 5
print(longest_consecutive_seq(list))