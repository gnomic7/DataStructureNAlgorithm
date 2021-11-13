const originalGrid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const explore = (grid, row, col, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;
  // guard against any inbounds failure
  if (!rowInBounds || !colInBounds) return false;
  // If there is water - no need to count
  if (grid[row][col] === 'W') return false;
  const pos = `${row},${col}`;
  if (visited.has(pos)) return false;
  visited.add(pos);
  // Do the depthFirst traversal
  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col + 1, visited);
  explore(grid, row, col - 1, visited);
  return true;
};

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited)) {
        count++;
      }
    }
  }
  return count;
};

console.log(`Number of Islands:`, islandCount(originalGrid));
