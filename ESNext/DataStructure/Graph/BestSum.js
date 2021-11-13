const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};

const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remResult = bestSumMemo(remainder, numbers, memo);
    if (remResult !== null) {
      const combination = [...remResult, num];
      if (shortestCombination === null) {
        shortestCombination = combination;
      } else {
        shortestCombination =
          shortestCombination.length > combination.length
            ? combination
            : shortestCombination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
console.log(bestSum(7, [1, 2, 3, 6]));
console.log(bestSum(13, [8, 9, 6]));
console.log(bestSumMemo(8, [2, 3, 5, 8]));
console.log(bestSumMemo(300, [7, 14, 25]));

// Language: javascript
// Function to find the best sum of a set of numbers