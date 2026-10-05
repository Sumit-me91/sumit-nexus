def process_field(field, n, m):
    result = [['' for _ in range(m)] for _ in range(n)]
    directions = [(-1,-1), (-1,0), (-1,1), (0,-1), (0,1), (1,-1), (1,0), (1,1)]

    for i in range(n):
        for j in range(m):
            if field[i][j] == '*':
                result[i][j] = '*'
            else:
                count = 0
                for dx, dy in directions:
                    ni, nj = i + dx, j + dy
                    if 0 <= ni < n and 0 <= nj < m and field[ni][nj] == '*':
                        count += 1
                result[i][j] = str(count)
    return result

def main():
    import sys
    input = sys.stdin.read
    data = input().splitlines()

    i = 0
    field_num = 1

    while i < len(data):
        if data[i].strip() == "":
            i += 1
            continue

        n, m = map(int, data[i].split())
        if n == 0 and m == 0:
            break
        i += 1

        field = []
        for _ in range(n):
            field.append(list(data[i]))
            i += 1

        result = process_field(field, n, m)

        if field_num > 1:
            print()
        print(f"Field #{field_num}:")
        for row in result:
            print("".join(row))
        field_num += 1

main()
