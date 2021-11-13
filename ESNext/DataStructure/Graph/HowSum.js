const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remResult = howSum(remainder, numbers);
    if (remResult) {
      return [...remResult, num];
    }
  }
  return null;
};

const howSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remResult = howSumMemo(remainder, numbers, memo);
    if (remResult !== null) {
      memo[targetSum] = [...remResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [5, 2, 6, 7]));
console.log(howSumMemo(12, [5, 3, 6]));
console.log(howSum(0, [5, 3])); // []
console.log(howSumMemo(300, [7, 14]));
