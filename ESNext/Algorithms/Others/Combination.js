const combinations = (elements) => {
  if (!elements.length) return [[]];
  if (elements.length === 1) return [[], [elements[0]]];
  const [firstEl, ...rest] = elements;
  const combsWithoutFirst = combinations(rest);
  const combsWithFirst = [];
  for (let comb of combsWithoutFirst) {
    combsWithFirst.push([...comb, firstEl]);
  }
  return [...combsWithoutFirst, ...combsWithFirst];
};

console.log(combinations(['a', 'b']));
