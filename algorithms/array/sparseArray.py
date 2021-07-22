"""
You have a large array with most of the elements as zero.

Use a more space-efficient data structure, SparseArray, that implements the same interface:

init(arr, size): initialize with the original large array and size.
set(i, val): updates index at i with val.
get(i): gets the value at index i.
"""

class SparseArray:

    def __init__(self, arr, size):
        self.size = size

        values = {}
        for i, val in enumerate(arr):
            if val != 0:
                values[i] = val

        self.values = values

    def set(self, i, val):
        self.values[i] = val

    def get(self, i):
        if i not in self.values.keys():
            return 0

        return self.values[i]