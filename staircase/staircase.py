import sys

n = int(input().strip())

for i in range(1, n+1):
    string = ''
    hashes = i
    spaces = n - i
    string += ' ' * spaces
    string += '#' * hashes
    print (string)