from collections import defaultdict

"""
Given a word W and a string S, find all starting indices in S which are anagrams of W.

For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.
"""

def isAnagram(str1, str2):
    if len(str1) != len(str2):
        return False

    freq = defaultdict(lambda : 0)

    for char in str1:
        freq[char] += 1

    for char in str2:
        if char in freq and freq[char] > 0:
            freq[char] -= 1
        else:
            return False

    return True

def find_anagrams(W, S):
    set_W = set(W)
    idxs = []

    for i, char in enumerate(S):
        if char in set_W and isAnagram(W, S[i:i + len(W)]):
            idxs.append(i)

    return idxs

print(find_anagrams('ab', 'abxaba'))