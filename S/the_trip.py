def compute_exchange(expenses):
    cents = [int(round(e * 100)) for e in expenses]
    avg = sum(cents) // len(cents)
    exchange = sum(max(0, c - avg) for c in cents)
    return f"${exchange / 100:.2f}"

data = """3
10.00
20.00
30.00
4
15.00
15.01
3.00
3.01
0""".splitlines()

i = 0
while i < len(data):
    n = int(data[i])
    if n == 0:
        break
    i += 1
    expenses = [float(data[i + j]) for j in range(n)]
    print(compute_exchange(expenses))
    i += n
