from itertools import combinations
from functools import lru_cache
import sys

def score_category(category, roll):
    counts = [roll.count(i) for i in range(1, 7)]
    total = sum(roll)

    if category < 6:
        return counts[category] * (category + 1)
    elif category == 6:  # chance
        return total
    elif category == 7:  # three of a kind
        if max(counts) >= 3:
            return total
    elif category == 8:  # four of a kind
        if max(counts) >= 4:
            return total
    elif category == 9:  # five of a kind
        if max(counts) == 5:
            return 50
    elif category == 10:  # short straight
        # check for any sequence of 4
        if any(all(i in roll for i in seq) for seq in ([1,2,3,4], [2,3,4,5], [3,4,5,6])):
            return 25
    elif category == 11:  # long straight
        if sorted(roll) == [1,2,3,4,5] or sorted(roll) == [2,3,4,5,6]:
            return 35
    elif category == 12:  # full house
        if sorted(counts.count(c) for c in set(counts) if c != 0) == [2, 3]:
            return 40
    return 0

def yahtzee_solver(rolls):
    @lru_cache(maxsize=None)
    def dp(mask, upper_score):
        if mask == (1 << 13) - 1:
            bonus = 35 if upper_score >= 63 else 0
            return ([], bonus + upper_score)

        best = ([], -1)
        idx = bin(mask).count('1')

        for cat in range(13):
            if not (mask & (1 << cat)):
                score = score_category(cat, rolls[idx])
                new_upper = upper_score + score if cat < 6 else upper_score
                result, total = dp(mask | (1 << cat), new_upper)
                if total + score > best[1]:
                    best = ([*result, (cat, score)], total + score)
        return best

    assignment, total_score = dp(0, 0)
    result = [0] * 13
    for cat, score in assignment:
        result[cat] = score
    bonus = 35 if sum(result[:6]) >= 63 else 0
    return result + [bonus, sum(result) + bonus]

def main():
    import sys
    input = sys.stdin.read
    lines = input().strip().split('\n')

    i = 0
    while i < len(lines):
        if not lines[i].strip():
            i += 1
            continue
        game_rolls = []
        for _ in range(13):
            game_rolls.append(list(map(int, lines[i].split())))
            i += 1
        scores = yahtzee_solver(game_rolls)
        print(' '.join(map(str, scores)))

main()
