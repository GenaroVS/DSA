"""
Given an array of numbers representing the stock prices of a company in chronological order and an integer k, return the maximum profit you can make from k buys and sells. You must buy the stock before you can sell it, and you must sell the stock before you can buy it again.

For example, given k = 2 and the array [5, 2, 4, 0, 1], you should return 3.
"""

def maxStockProfit(prices, tsxCount):
    if len(prices) == 0 or tsxCount == 0: return 0
    N = len(prices)

    dp = [[0] * N for _ in range(tsxCount + 1)]

    for i in range(tsxCount + 1):
        for j in range(N):
            if i == 0 or j == 0:
                dp[i][j] = 0
                continue

            max_so_far = float('-inf')
            for m in range(j):
                max_so_far = max(max_so_far, prices[j] - prices[m] + dp[i - 1][m])
            dp[i][j] = max(dp[i][j - 1], max_so_far)


    return dp[tsxCount][N - 1]




print(maxStockProfit([5,2,4,0,1], 2))
