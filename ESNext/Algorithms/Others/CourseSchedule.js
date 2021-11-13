/**
 * Question:
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where
 *    prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return the ordering of courses you should take to finish all courses.
 * If there are many valid answers, return any of them.
 * If it is impossible to finish all courses, return an empty array.
 */

const courseSchedule = (preReqs) => {
  // Get the adjacency list from the supplied array
  const adjacencyList = getAdjacency(preReqs);
  const coursesList = [];
  const queue = [];
  let idx = 0;
  for (let fKey in adjacencyList) {
    if (idx === 1) {
      queue.push(fKey);
      break;
    }
    idx++;
  }
  while (queue.length > 0) {
    const curr = queue.shift();
    coursesList.push(curr);
    for (let preqs of adjacencyList[curr]) {
      queue.push(preqs);
    }
  }
  return coursesList;
};

const getAdjacency = (reqs) => {
  const adjList = {};
  for (let [course, preReq] of reqs) {
    if (!adjList[preReq]) {
      adjList[preReq] = [];
    }
    if (!adjList[course]) {
      adjList[course] = [preReq];
    } else {
      adjList[course].push(preReq);
    }
  }
  return adjList;
};
const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];
const numCourses = 4;
console.log(courseSchedule(prerequisites));
