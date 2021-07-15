"""
You are given a 2-d matrix where each cell represents number of coins in that cell. Assuming we start at matrix[0][0], and can only move right or down, find the maximum number of coins you can collect by the bottom right corner.
"""

def max_coins(grid, i = 0, j = 0, cache = None):
    if cache is None:
        cache = {}

    N = len(grid)
    M = len(grid[0])
    coin = grid[i][j]

    if (i,j) not in cache:
        if i == N - 1 and j == M - 1:
            cache[i, j] = coin
        elif i == N - 1:
            cache[i, j] = coin + max_coins(grid, i, j + 1, cache)
        elif j == M - 1:
            cache[i, j] = coin + max_coins(grid, i + 1, j, cache)
        else:
            cache[i, j] = coin + max(max_coins(grid, i + 1, j, cache), max_coins(grid, i, j + 1, cache))


    return cache[i, j]


grid1 = [
    [0,3,1,1],
    [2,0,0,4],
    [1,5,3,1]
]

print(max_coins(grid1))
