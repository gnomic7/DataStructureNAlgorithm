// No directions - lack of arrows
// Traveling salesman
// Network of friends on fb
// Check if any path exists betwen source and the destination
const drawGraph = require('./AdjacencyList');

const hasRoute = (graph, src, target, visited = new Set()) => {
  if (src === target) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (!!hasRoute(graph, neighbor, target, visited)) return true;
  }
  return false;
};

const edges = [
  ['a', 'b'],
  ['a', 'c'],
  ['b', 'd'],
  ['c', 'e'],
  ['d', 'f'],
  ['d', 'a'],
  ['e'],
  ['f'],
  [, 'g'],
];
const graphForm = drawGraph(edges);
console.log(graphForm);
console.log(hasRoute(graphForm, 'a', 'g'));
