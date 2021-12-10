const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
};

// Try BestSum - by picking the best pair/groups

// Try CountSum - by adding [] at position 0
// Iterate over the numbers and keep seeding the value at each num in numbers
// While doing that, include the index and previous value - [] on 3rd position = [2], and 4th be [4]
//When reaching at 3rd check the two positions from it []
console.log(canSum(7, [2, 3]));
console.log(canSum(7, [2, 4]));
console.log(canSum(300, [7, 14]));
