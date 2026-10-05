import sys
from collections import Counter

def is_valid(target, frags):
    count = Counter(frags)
    for f in frags:
        remain = target.replace(f, "", 1)
        if count[f] == 0 or count[remain] == 0:
            return False
        count[f] -= 1
        count[remain] -= 1
    return True

def solve_case(frags):
    frags.sort(key=len)
    max_len = len(frags[-1]) + len(frags[0])
    for a in frags:
        for b in frags:
            if a == b: continue
            candidate = a + b
            if len(candidate) != max_len: continue
            if is_valid(candidate, frags):
                return candidate
    return ""

def main():
    lines = sys.stdin.read().strip().split('\n')
    i = 0
    T = int(lines[i]); i += 1
    cases, current = [], []
    while i < len(lines):
        if lines[i].strip() == "":
            if current: cases.append(current); current = []
        else:
            current.append(lines[i].strip())
        i += 1
    if current: cases.append(current)

    for idx, frags in enumerate(cases):
        print(solve_case(frags))
        if idx < len(cases) - 1: print()

if __name__ == "__main__":
    main()
