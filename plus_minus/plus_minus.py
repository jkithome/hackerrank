import sys

n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]
negative =0
zero = 0
positive = 0
for x in arr:
    if x < 0:
        negative += 1
    elif x == 0:
        zero += 1
    else:
        positive += 1

print (round((positive/n), 3), round((negative/n), 3), round((zero/n), 3), sep='\n')
