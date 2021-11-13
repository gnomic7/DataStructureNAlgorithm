const traversal = (graph, nodeVal, visited) => {
  if (visited.has(nodeVal)) return 0;
  visited.add(nodeVal);
  let depth = 1;
  for (let neighbor of graph[nodeVal]) {
    depth += traversal(graph, neighbor, visited);
  }
  return depth;
};
const getLargestConnectedComponent = (graph) => {
  let largest = 0;
  const visited = new Set();
  for (let i in graph) {
    const size = traversal(graph, +i, visited);
    if (size > largest) largest = size;
  }
  return largest;
};

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
  6: [7],
  7: [0],
};

console.log(getLargestConnectedComponent(graph));
