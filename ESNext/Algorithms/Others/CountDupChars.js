const countNumChars = (inputStr) => {
  const memo = {};
  for (let i of inputStr) {
    const j = i.toUpperCase();
    if (j in memo) memo[j]++;
    else memo[j] = 1;
  }
  return memo;
};

console.log(countNumChars('sonia'));
