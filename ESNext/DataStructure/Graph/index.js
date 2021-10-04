const Queue = require('../Queue');

const data = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

const depthFirstSearchRec = (gData, source) => {
  console.log(source);
  for (let neighbor of gData[source]) {
    depthFirstSearchRec(gData, neighbor);
  }
};

const depthFirstSearch = (gData, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of gData[current]) {
      stack.push(neighbor);
    }
  }
};

const breadthFirstSearch = (gData, startNode) => {
  // Inserts every traversal to the queue
  const q = [startNode];
  let traverse = '';
  while (q.size() > 0) {
    const current = q.shift();
    for (let neighbor of gData[current]) {
      q.push(neighbor);
    }
  }
  console.log(traverse);
};

// breadthFirstSearch(data, 'a');
depthFirstSearch(data, 'a');
