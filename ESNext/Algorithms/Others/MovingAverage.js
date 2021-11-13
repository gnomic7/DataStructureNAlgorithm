const movingAverage = (arr, n) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum += arr[j] || 0;
    }
    result.push(sum / n);
  }
  return result;
};

console.log(movingAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
