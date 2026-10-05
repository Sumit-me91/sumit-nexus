def main():
    import sys

    # Full QWERTY layout (excluding keys like Q, A, Z as per the problem)
    key_map = "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./"

    # Create reverse lookup: map each character to the one before it
    decode_map = {key_map[i]: key_map[i - 1] for i in range(1, len(key_map))}

    for line in sys.stdin:
        result = ''
        for char in line:
            if char in decode_map:
                result += decode_map[char]
            else:
                result += char  # leave space or unlisted characters as-is
        print(result, end='')

main()
