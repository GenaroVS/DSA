# Given a sorted list of integers, square the elements and give the output in sorted order.

def sorted_squares(nums):
    prev_neg = []
    prev_pos = []
    result = []

    for num in nums:
        if num < 0:
            prev_neg.append(num ** 2)
        else:
            prev_pos.append(num ** 2)

    i = 0
    while i < len(prev_pos) and len(prev_neg):
        if prev_pos[i] < prev_neg[-1]:
            result.append(prev_pos[i])
            i += 1
        else:
            result.append(prev_neg.pop())

    if i < len(prev_pos):
        result.extend(prev_pos)
    elif len(prev_neg):
        result.extend(prev_neg)

    return result

print(sorted_squares([-9,-2,0,2,3]))