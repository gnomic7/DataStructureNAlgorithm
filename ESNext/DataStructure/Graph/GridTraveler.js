const gridTraveler = (r, c, memo = {}) => {
  const pos = `${r},${c}`;
  const revPos = `${c},${r}`;
  if (pos in memo || revPos in memo) return memo[pos];

  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;
  memo[pos] = gridTraveler(r - 1, c, memo) + gridTraveler(r, c - 1, memo);
  memo[revPos] = memo[pos];
  return memo[pos];
};

const gridTravelerTable = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  console.log(table);
};

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(5, 5));
// console.log(gridTraveler(18, 18));
console.log(gridTravelerTable(2, 3));
