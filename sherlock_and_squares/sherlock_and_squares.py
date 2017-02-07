#!/bin/python3

import sys
import math


t = int(input().strip())
for a0 in range(t):
    arr = list(map(int, input().strip().split(' ')))
    counter = 0
    min = arr[0]
    max = arr[1]
    start = int(math.sqrt(min))
    while start ** 2 <= max:
        square = start ** 2
        if square >= min and square <= max:
            counter += 1
        start += 1
    print (counter)
