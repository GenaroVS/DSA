# Given an unsorted array of integers,
# find the length of the longest consecutive elements sequence.

def longest_consecutive_seq(nums):
  """
  :int[]: nums
  """
  largestSet = 0
  local_len = 0
  max_num = 0

  for num in nums:
    max_num = max(num, max_num)

  set = [None] * (max_num + 1)

  for num in nums:
    set[num] = num

  for i,num in enumerate(set):
    if type(num) == int:
      local_len += 1
    else:
      local_len = 0
    largestSet = max(largestSet, local_len)

  return largestSet



list = [100,4,200,1,3,2,101,102,103,104] # 5
print(longest_consecutive_seq(list))