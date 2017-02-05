#!/bin/python3

import sys


t = int(input().strip())
for a0 in range(t):
    n, k = input().strip().split(' ')
    n, k = [int(n), int(k)]
    a = [int(a_temp) for a_temp in input().strip().split(' ')]
    present = 0
    for x in a:
        if x <= 0:
            present += 1
    if present >= k:
        print('NO')
    elif present < k:
        print('YES')
