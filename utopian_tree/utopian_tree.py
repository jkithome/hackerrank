import sys

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    height = 1
    if n == 0:
        print (1)
    else:
        for i in range(1, n + 1):
            if i % 2 != 0:
                height *= 2
            else:
                height += 1
        print (height)
