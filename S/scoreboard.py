import sys
from collections import defaultdict

def run(data):
    i, t = 0, int(data[0])
    cases, buf = [], []
    for line in data[1:]:
        if line.strip(): buf.append(line)
        elif buf: cases.append(buf); buf = []
    if buf: cases.append(buf)

    for k, case in enumerate(cases):
        users = {}
        for line in case:
            c, p, m, L = line.split(); c, p, m = int(c), int(p), int(m)
            if c not in users:
                users[c] = {'s': 0, 't': 0, 'p': defaultdict(lambda: [0, False])}
            prob = users[c]['p'][p]
            if L == 'C' and not prob[1]:
                users[c]['s'] += 1; users[c]['t'] += m + prob[0]*20; prob[1] = True
            elif L == 'I' and not prob[1]: prob[0] += 1

        res = [(c, u['s'], u['t']) for c, u in users.items()]
        for row in sorted(res, key=lambda x: (-x[1], x[2], x[0])):
            print(*row)
        if k < len(cases)-1: print()

if __name__ == "__main__":
    run(sys.stdin.read().splitlines())
