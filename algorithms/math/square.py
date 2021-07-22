# Given a real number n, find the square root of n. For example, given n = 9, return 3.

def square(n, error = .0001):
    low = 0
    high = n
    guess = (low + high) / 2

    while abs(guess ** 2 - n) > .0001:
        if guess ** 2 > n:
            high = guess
        else:
            low = guess
        guess = (low + high) / 2


    return guess

print(square(25))