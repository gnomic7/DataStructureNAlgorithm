const countConstruct = (target, wordBank) => {
  // Logic goes here...
  if (target === '') return 1;

  let totalCount = 0;
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      totalCount += countConstruct(target.slice(word.length), wordBank);
    }
  }
  return totalCount;
};

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'ef', 'def', 'abcd'])); // 1
