def permute(nums):
  """
  Given a number in the form of a list of digits, return all possible permutations
  :int[]: nums
  """
  if (len(nums) == 1):
    return [nums]

  result = []
  for list in permute(nums[1:]):
    for i in range(len(nums)):
      result.append(list[:i] + [nums[0]] + list[i:])

  return result



