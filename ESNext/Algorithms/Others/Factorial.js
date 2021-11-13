const factRecursive = (n, memo = {}) => {
  if (n < 2) return 1;
  if (n in memo) return memo[n];
  memo[n] = n * factRecursive(n - 1, memo);
  return memo[n];
};

console.log(factRecursive(6));
