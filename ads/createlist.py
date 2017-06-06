import subprocess
items = subprocess.check_output(['ls'])
imgtypes = ['.jpg', '.png', '.gif', '.jpeg']
listoutput = '['
for i in items.split('\n'):
    found = False
    for j in imgtypes:
        #print('testing {} for {}'.format(i, j))
        #print(i.endswith(j))
        if i.endswith(j):
            #print('adding')
            found = True
            listoutput += '\'' + i + '\', '
    if not found:
        print('Not including {}'.format(i))
        print(i[-4:])
listoutput = listoutput[:-2]
listoutput += ']'
print(listoutput)
