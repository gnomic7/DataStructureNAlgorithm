const traverseGraph = (graph, start, visited = new Set()) => {
  if (visited.has(start)) return false;
  visited.add(start);
  for (let neighbor of graph[start]) {
    traverseGraph(graph, neighbor, visited);
  }
  return true;
};

const getConnectedCompCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (node in graph) {
    if (traverseGraph(graph, +node, visited)) {
      count++;
    }
  }
  console.log(visited);
  return count;
};

const graph = {
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};
console.log(getConnectedCompCount(graph));
