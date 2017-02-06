#!/bin/python3

import sys


t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    string = str(n)
    counter = 0
    for x in string:
        if int(x) != 0 and (n % int(x)) == 0:
            counter += 1
    print (counter)
