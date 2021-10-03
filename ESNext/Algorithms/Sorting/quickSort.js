const quickSort = (collection) => {
  //   Get the pivot - pick the first item for now
  const pivot = collection[0];
  if (collection.length <= 1) return collection;
  //   Get all the values less than pivot to the left
  const left_half = [],
    right_half = [];

  for (let i = 1; i < collection.length; i++) {
    collection[i] <= pivot
      ? left_half.push(collection[i])
      : right_half.push(collection[i]);
  }

  const l = quickSort(left_half);
  const r = quickSort(right_half);
  // return []
  return [...l, pivot, ...r];
  //   Get all the values greater than the pivot to the right
  //   Continue doing this until the size of the left/right is down to 1
  //   Insert pivot between left and right
};

module.exports = { quickSort };
