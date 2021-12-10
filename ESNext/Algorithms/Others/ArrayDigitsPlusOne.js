const ArrayDigitsPlusNRec = (initArray, n) => {
  if (n === 0) return initArray;
  const lastItem = initArray[initArray.length - 1];
  const lastItemPlusN = lastItem + n;
  const oneLessItems = initArray.slice(0, initArray.length - 1);
  if (!oneLessItems.length) {
    return [n, lastItemPlusN % 10];
  }
  if (lastItemPlusN < 10) {
    return [...oneLessItems, lastItem + 1];
  }
  return [
    ...ArrayDigitsPlusNRec(oneLessItems, parseInt(lastItemPlusN / 10)),
    lastItemPlusN % 10,
  ];
};

/**
 * This function should accept an array and add the provided number to the number
 * formed by the digits in that array - Return the new array
 *
 * @param {array} initArray List of numbers in the form of an array
 * @param {int} n digits 0 - 9
 */
const ArrayDigitsPlusN = (initArray, n) => {
  // If the last digits is smaller than 9, just add one
  const lastItem = initArray[initArray.length - 1];
  let lastPlusNum = lastItem + n;
  let finalArray = [];
  let carryOver = n;
  let i = initArray.length - 1;
  while (i > 0) {
    if (lastPlusNum >= 10) {
      finalArray = [lastPlusNum % 10, ...finalArray];
      carryOver = parseInt(lastPlusNum / 10);
      lastPlusNum = initArray[i - 1] + carryOver;
      i--;
    } else break;
  }
  return [...initArray.slice(0, i), initArray[i] + carryOver, ...finalArray];
};

console.log(ArrayDigitsPlusNRec([1, 5, 4, 6, 7], 1));
// should return [1,5,4,6,8]
console.log(ArrayDigitsPlusNRec([1, 5, 4, 9, 9, 9, 7, 9], 3));
// should return [1, 5, 5, 0, 0,0,0]
console.log(ArrayDigitsPlusNRec([9, 9, 9], 1));
