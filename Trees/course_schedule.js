/*
https://leetcode.com/problems/course-schedule/

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.


Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


Constraints:

1 <= numCourses <= 105
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {

    let topologicalSort = [];

    // Hash map of node with their respective indegrees
    let indegrees = {};

    // [[1,0], [2, 1], [3, 2], [4, 3], [5, 0]]
    // Generate hash map
    for(let i = 0; i < numCourses; i++) {
        let indegree = 0;
        prerequisites.forEach(prerequisite => {
            console.log(prerequisite[0], i);
            if (prerequisite[0] == i) {
                indegree++;
            }
        });
        indegrees[i] = indegree;
    } 
     
     console.log("indegrees", indegrees);
    
    let nodesWithZeroIndegree = [];

    // Find the first node with zero indegree
    for (const [key, value] of Object.entries(indegrees)) {
       if (value == 0) {
           nodesWithZeroIndegree.push(key);
       }
    }
     
    console.log("nodesWithZeroIndegree", nodesWithZeroIndegree);

    if (nodesWithZeroIndegree.length == 0) {
        return false;
    }
    
    while (nodesWithZeroIndegree.length) {
        console.log('while')
        let node = nodesWithZeroIndegree.unshift();
        topologicalSort.push(node);

        // Decrement indegree of neighbours
        prerequisites.forEach(prerequisite => {
            if (prerequisite[1] == node) {
                indegrees[prerequisite[0]]--;
            }
        });
    }
     
     console.log(topologicalSort);

    return topologicalSort.length == numCourses;
};

canFinish(2, [[1,0]]);