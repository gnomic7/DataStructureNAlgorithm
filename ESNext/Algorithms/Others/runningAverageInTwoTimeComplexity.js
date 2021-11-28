const runningAvgInQuadraticTime = (arr, span) => {
  const averages = [];
  for (i = 0; i < arr.length; i++) {
    let sum = 0,
      reachedEnd = false;
    for (j = i; j < span + i; j++) {
      if (isNaN(arr[j])) {
        reachedEnd = true;
        break;
      }
      sum += arr[j];
    }
    if (!reachedEnd) averages.push(parseInt(sum / span));
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
    averages.push(parseInt(sumMinusOne / span));
  }
  console.log(averages);
};

runningAvgInQuadraticTime([1, 7, 9, 8, 6, 4, 3, 11], 2);
runningAverageInLinearTime([1, 7, 9, 8, 6, 4, 3, 11], 2);
