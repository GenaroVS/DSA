"""
Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.
"""

def validHops(hops):
    """
    :param: hops : int[]
    :return: bool
    """
    length = len(hops)
    dp = [0] * length

    dp[0] = hops[0]

    for i in range(1, length - 1):

        if dp[i - 1] < i:
            return False

        dp[i] = max(i + hops[i], dp[i - 1])

        if dp[i] >= length - 1:
            return True

    return dp[length - 2] >= length - 1


list1 = [2,0,1,0]
list2 = [1,1,0,1]
list3 = [2,2,0,1]
print(validHops(list1)) # True
print(validHops(list2)) # False
print(validHops(list3)) # True