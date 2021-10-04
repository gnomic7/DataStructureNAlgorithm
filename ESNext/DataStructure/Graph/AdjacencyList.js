const generateAdjacencyList = (edges) => {
  const graph = {};
  for (let [a, b] of edges) {
    if (a) {
      if (!graph[a]) graph[a] = [];
      b ? graph[a].push(b) : '';
    }
    if (b) {
      if (!graph[b]) graph[b] = [];
      a ? graph[b].push(a) : '';
    }
  }
  return graph;
};

const edges = [
  ['a', 'b'],
  ['a', 'c'],
  ['b', 'd'],
  ['c', 'e'],
  ['d', 'f'],
  ['e'],
  ['f'],
  [, 'g'],
];

console.log(generateAdjacencyList(edges));
