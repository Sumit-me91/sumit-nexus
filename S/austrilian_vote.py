def australian_voting(candidates, ballots):
    n = len(candidates)
    eliminated = [False] * n

    while True:
        votes = [0] * n
        for ballot in ballots:
            for c in ballot:
                if not eliminated[c - 1]:
                    votes[c - 1] += 1
                    break

        total = sum(votes)
        max_votes = max(votes)
        min_votes = min(v for i, v in enumerate(votes) if not eliminated[i])

        if max_votes > total / 2:
            return [candidates[i] for i, v in enumerate(votes) if v == max_votes]

        if all(v == min_votes or eliminated[i] for i, v in enumerate(votes)):
            return [candidates[i] for i in range(n) if not eliminated[i]]

        for i in range(n):
            if votes[i] == min_votes:
                eliminated[i] = True


# Sample input from PDF
candidates = ["John Doe", "Jane Smith", "Sirhan Sirhan"]
ballots = [
    [1, 2, 3],
    [2, 1, 3],
    [2, 3, 1],
    [1, 2, 3],
    [3, 1, 2]
]

for name in australian_voting(candidates, ballots):
    print(name)
