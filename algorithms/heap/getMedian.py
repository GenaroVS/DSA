"""
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted."""
import heapq

class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """

        self.min_heap = []
        self.max_heap = []
        self.size = 0


    def addNum(self, num: int) -> None:
        if self.size % 2 == 0:
            heapq.heappush(self.min_heap, num)
        else:
            heapq.heappush(self.max_heap, -num)

        if len(self.max_heap) and len(self.min_heap) and self.max_heap[0] * -1 > self.min_heap[0]:
            max = heapq.heappop(self.max_heap)
            min = heapq.heappop(self.min_heap)

            heapq.heappush(self.max_heap, -min)
            heapq.heappush(self.min_heap, max)


        self.size += 1

    def findMedian(self) -> float:
        if self.size == 1:
            return self.min_heap[0]

        min = self.min_heap[0]
        max = self.max_heap[0]

        if self.size % 2 == 0:
            return (min - max) / 2
        elif len(self.min_heap) > len(self.max_heap):
            return min
        else:
            return max
