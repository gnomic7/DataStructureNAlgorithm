const LinkedList = require('./DataStructure/LinkedList/SinglyLinkedList');
const { fact, factMemo } = require('./Algorithms/factorial');
const { linearSearch } = require('./Algorithms/Searching/linearSearch');
const { quickSort } = require('./Algorithms/Sorting/quickSort');
const useLinkedList = () => {
  const ll = new LinkedList(10);
  ll.append(20);
  ll.append(30);
  ll.append(50);
  ll.append(100);
  ll.append(200);
  ll.insert(25, 5);
  console.log(ll.prettyPrint());
  console.log(ll.size());
  console.log(ll.search(50));
  console.log(ll.search(51));
};

const useFactorial = () => {
  // This algorithm iterates through each items
  console.time();
  console.log(fact(20));
  console.timeEnd();
  // This implementation uses the same as before but memoizes the already executed steps
  // Hence, improving the time complexity
  console.time();
  console.log(factMemo(20));
  console.timeEnd();
};

const useSorting = (algo) => {
  const collection = [10, 23, 4, 34, 78, 9, 24, 65, 32, 9, 22, 35];

  switch (algo) {
    case 'quickSort':
      console.log(quickSort(collection));
  }
};

const useSearching = (algo, target) => {
  const collection = [10, 23, 4, 34, 78, 9, 24, 65, 32, 9, 22, 35];

  switch (algo) {
    case 'linear':
      console.log(linearSearch(collection, target));
  }
};

// Comment the following line - if LinkedList is not inteded to run
useLinkedList();
// Comment the following line - if Factorial algorithm is not intended to run
userFactorial();
// Comment the following line - to not run search
useSearching('linearSearch', 10);
// Comment the following line - to not run sorting
useSorting('quickSort');
