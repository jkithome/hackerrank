import sys

n = int(raw_input().strip())
a = []
for a_i in xrange(n):
    a_temp = map(int,raw_input().strip().split(' '))
    a.append(a_temp)
diagA = 0
diagB = 0
for i in range(n):
    diagA += a[i][i]
    diagB += a[i][n - 1 - i]

print abs(diagA - diagB)