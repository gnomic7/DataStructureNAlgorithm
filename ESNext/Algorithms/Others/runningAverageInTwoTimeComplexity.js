const runningAvgInQuadraticTime = (arr, span) => {
  const averages = [];
  for (i = 0; i < arr.length; i++) {
    let sum = 0,
      isEnd = false;
    for (j = i; j < span + i; j++) {
      if (isNaN(arr[j])) {
        isEnd = true;
        break;
      }
      sum += arr[j];
    }
    if (!isEnd) averages.push(parseFloat(sum / span).toFixed(2));
  }
  console.log(averages);
};

const runningAverageInLinearTime = (arr, span) => {
  const sum = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) sum.push(arr[i]);
    else sum.push(sum[i - 1] + arr[i]);
  }
  const averages = [];
  for (i = span - 1; i < sum.length; i++) {
    const sumMinusOne = sum[i] - (sum[i - span] ?? 0);
    averages.push(parseFloat(sumMinusOne / span).toFixed(2));
  }
  console.log(averages);
};

runningAvgInQuadraticTime([1, 7, 9, 8, 6, 4, 3, 11, 20], 5);
runningAverageInLinearTime([1, 7, 9, 8, 6, 4, 3, 11, 20], 5);
