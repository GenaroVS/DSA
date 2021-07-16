"""
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".

Return the number of different expressions that you can build, which evaluates to target.
"""

def targetSum(nums, target, i = 0, cache = None, sum = 0):
    if cache == None:
        cache = {}

    if (i, sum) in cache:
        return cache[(i, sum)]

    if sum == target and i == len(nums):
        return 1
    elif i == len(nums):
        return 0

    pos = targetSum(nums, target, i + 1, cache, sum + nums[i])
    neg = targetSum(nums, target, i + 1, cache, sum - nums[i])

    cache[(i, sum)] = pos + neg
    return pos + neg

print(targetSum([1,1,1,1,1], 3))
