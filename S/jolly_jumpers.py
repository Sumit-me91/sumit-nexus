def is_jolly(sequence):
    n = sequence[0]
    if n == 1:
        return "Jolly"
    
    diffs = set()
    for i in range(1, n):
        diff = abs(sequence[i] - sequence[i+1])
        if 1 <= diff < n:
            diffs.add(diff)
    
    return "Jolly" if len(diffs) == n - 1 else "Not jolly"

def main():
    import sys
    for line in sys.stdin:
        if not line.strip():
            continue
        sequence = list(map(int, line.strip().split()))
        print(is_jolly(sequence))

main()
