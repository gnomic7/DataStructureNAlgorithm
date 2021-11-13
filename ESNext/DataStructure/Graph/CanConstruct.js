const canConstruct = (targetWord, wordBank) => {
  if (targetWord.length === 0) return true;

  for (let prefix of wordBank) {
    if (targetWord.startsWith(prefix)) {
      const suffix = targetWord.slice(prefix.length);

      if (canConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }
  return false;
};

const canConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target.length === 0) return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      if (canConstructMemo(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};
console.log(canConstructMemo('abccddef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  canConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']),
);
console.log(
  canConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ]),
);
