from collections import deque

def numOfIslands(grid):
    count = 0

    def clear(i, j, grid):
        queue = deque()
        queue.append((i, j))
        grid[i][j] = '0'

        while len(queue):
            size = len(queue)

            for _ in range(size):
                row, col = queue.popleft()

                for alt in ((1,0),(-1,0),(0,1),(0,-1)):
                    pot_row = row + alt[0]
                    pot_col = col + alt[1]
                    if pot_row < 0 or pot_row == len(grid):
                        continue
                    if pot_col < 0 or pot_col == len(grid[row]):
                        continue

                    if grid[pot_row][pot_col] == '1':
                        queue.append((pot_row, pot_col))
                        grid[pot_row][pot_col] = '0'


    for i, row in enumerate(grid):
        for j, col in enumerate(row):
            if col == '1':
                count += 1
                clear(i, j, grid)

    return count


grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

result = numOfIslands(grid)
print(result)