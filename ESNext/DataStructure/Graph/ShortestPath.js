// Cannot use depth first because the finding may go totally on the wrong direction
// and might find the nearest node as the last.

const drawGraph = require('./AdjacencyList');

const breadthFirstSearch = (graph, start, end) => {
  const visited = new Set([start]);
  const q = [[start, 0]];

  while (q.length > 0) {
    let [node, distance] = q.shift();
    if (node === end) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        q.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

const shortestPath = (graph) => {
  return breadthFirstSearch(graph, 'w', 'z');
};

const graph = drawGraph([
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['w', 'v'],
  ['z', 'v'],
]);
console.log(graph);
console.log(shortestPath(graph));
