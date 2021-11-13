// 1,1,2,3,5,8,13,21,34,55,89 .....fibbonacci
const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  console.log(memo);
  return memo[n];
};

console.log(`Fibbonacci of: `, fibMemo(6));
