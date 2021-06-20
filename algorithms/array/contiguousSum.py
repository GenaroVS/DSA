def contiguousSum(nums, k):
  '''
  Given a list of integers and a number K,
  return which contiguous elements of the list sum to K.
  :param: int[] : nums
  :param: int : k
  :return: int[]
  '''

  left = 0
  right = 0
  sum = 0

  while left < len(nums):
    if sum == k:
      return nums[left:right]
    elif sum > k:
      sum -= nums[left]
      left += 1
    else:
      sum += nums[right]
      right += 1

  return False

list = [1,2,3,4,5]
print(contiguousSum(list, 9)) # [2,3,4]
print(contiguousSum(list, 7)) # [3,4]
print(contiguousSum(list, 5)) # [2,3]
print(contiguousSum(list, 1)) # [1]

