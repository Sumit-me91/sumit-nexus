from collections import defaultdict, deque
import sys

def parse_authors(line):
    authors_part = line.split(':')[0]
    return [author.strip() for author in authors_part.split(', ') if author]

def compute_erdos_numbers(papers):
    graph = defaultdict(set)
    for paper in papers:
        authors = parse_authors(paper)
        for i in range(len(authors)):
            for j in range(len(authors)):
                if i != j:
                    graph[authors[i]].add(authors[j])
    return graph

def bfs_erdos_numbers(graph):
    distances = defaultdict(lambda: "infinity")
    queue = deque()
    if "Erdos, P." in graph:
        distances["Erdos, P."] = 0
        queue.append("Erdos, P.")
        while queue:
            current = queue.popleft()
            for neighbor in graph[current]:
                if distances[neighbor] == "infinity":
                    distances[neighbor] = distances[current] + 1
                    queue.append(neighbor)
    return distances

def process_scenarios(input_lines):
    index = 0
    num_scenarios = int(input_lines[index])
    index += 1
    output = []
    for scenario_num in range(1, num_scenarios + 1):
        P, N = map(int, input_lines[index].split())
        index += 1
        papers = input_lines[index:index + P]
        index += P
        names = input_lines[index:index + N]
        index += N

        graph = compute_erdos_numbers(papers)
        erdos_numbers = bfs_erdos_numbers(graph)

        output.append(f"Scenario {scenario_num}")
        for name in names:
            num = erdos_numbers[name.strip()]
            output.append(f"{name.strip()} {num}")
    return "\n".join(output)

if __name__ == "__main__":
    input_text = sys.stdin.read().splitlines()
    result = process_scenarios(input_text)
    print(result)
