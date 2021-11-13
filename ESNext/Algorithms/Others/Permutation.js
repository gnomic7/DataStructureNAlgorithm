const permutations = (elements) => {
  if (!elements.length) return [[]];
  const [firstElem, ...rest] = elements;
  const permWithoutFirst = permutations(rest);
  const permCollection = [];
  for (let perm of permWithoutFirst) {
    for (i = 0; i <= perm.length; i++) {
      permCollection.push([...perm.slice(0, i), firstElem, ...perm.slice(i)]);
    }
  }
  return permCollection;
};

console.log(JSON.stringify(permutations(['a', 'b', 'c', 'd', 'e', 'f', 'g'])));
