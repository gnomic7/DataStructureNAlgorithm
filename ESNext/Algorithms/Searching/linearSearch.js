const linearSearch = (collection, target) => {
  //   Loop through each item in the collection
  //   If the element in the index matches to the target, return the index - the best case
  //   Else, Keep looping until the end of the list is reached and return false
  //   Overall - takes O(n) time to complete this operation
  const len = collection.length; // - O(1)
  for (let i = 0; i < len; i++) {
    //- O(n)
    if (collection[i] === target) return i; // - O(1)
  }
  return false; //- O(1)
};

module.exports = { linearSearch };
