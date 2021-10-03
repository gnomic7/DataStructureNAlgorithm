const fact = (n) => {
  //   If the base case is reached - return 1
  //   Else, keep calling fact with a 1 less than the previous value
  //   6! = 6*5*4*3*2*1
  if (n === 1) return n;
  return n * fact(n - 1);
};

let globFact = {};
const factMemo = (n) => {
  //   If the base case is reached - return 1
  //   Else, keep calling fact with a 1 less than the previous value
  //   6! = 6*5*4*3*2*1
  if (n === 1) return n;
  if (globFact[n]) return globFact[n];
  else globFact[n] = n * factMemo(n - 1);
  return globFact[n];
};

module.exports = {
  factMemo,
  fact,
};
