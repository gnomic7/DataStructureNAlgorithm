const isPairSum = (arr, sum) => {
  const len = arr.length;
  let i = 0,
    j = len - 1;

  while (i <= j) {
    const runningSum = arr[i] + arr[j];
    if (runningSum === sum) return true;
    runningSum > sum ? j-- : i++;
  }
  return false;
};

console.log(isPairSum([3, 5, 9, 2, 8, 10, 11], 12));
