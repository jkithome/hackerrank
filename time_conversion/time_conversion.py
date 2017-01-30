import sys
import re

time = input().strip()
if 'P' in time:
    newTime = re.sub('[A-Z]', '', time)
    newTime = re.split('\D', newTime)
    if int(newTime[0]) >= 12:
        print (newTime[0], newTime[1], newTime[2], sep=':')
    else:
        print (int(newTime[0]) + 12, newTime[1], newTime[2], sep=':')
elif 'A' in time:
    _newTime = re.sub('[A-Z]', '', time)
    _newTime = re.split('\D', _newTime)
    if int(_newTime[0]) >= 12:
        print (('0' + str(int(_newTime[0]) - 12)), _newTime[1], _newTime[2], sep=':')
    elif int(_newTime[0]) < 12:
        print (_newTime[0], _newTime[1], _newTime[2], sep=':')
