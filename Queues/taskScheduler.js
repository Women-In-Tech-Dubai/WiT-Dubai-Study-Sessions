/**
 * Stacks & queues
 * Wednesday, March 26th
 * https://leetcode.com/problems/task-scheduler/
 */

/**
 * Given a char array representing tasks CPU need to do.
 * It contains capital letters A to Z where different letters represent different tasks.
 * Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.
 *
 * However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.
 *
 * You need to return the least number of intervals the CPU will take to finish all the given tasks.
 *
 * Example:
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 *
 *
 * Constraints:
 * The number of tasks is in the range [1, 10000].
 * The integer n is in the range [0, 100].
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let taskCounter = {};
    let mostFrequentTaskCount = 0;
    let totalAvailableSlots = 0;
    let idleSlots = 0;

    // keep track of each task count and the count of the most frequently occuring task
    tasks.forEach((task) => {
        taskCounter[task] = taskCounter[task] ? ++taskCounter[task] : 1;
        if (mostFrequentTaskCount < taskCounter[task]) {
            mostFrequentTaskCount = taskCounter[task];
        }
    });

    // total number of available slots is dependent upon the most frequent task and the cooling period
    // the most frequently occuring task is excluded by subtracting 1
    // eg. ['A', 'A', 'B', 'C'] n = 3
    // A -> __ -> __ -> __ -> A: there is a total of 3 available slots which can be assigned to other tasks/idle
    // A -> B -> C -> idle -> A 
    // totalAvailableSlots = (2 - 1) * 3 = 3
    totalAvailableSlots = (mostFrequentTaskCount - 1) * n;

    // generate an array of the task count in descending order
    let taskCount = Object.values(taskCounter).sort((a, b) => b - a);

    // exclude the most frequently occurring task by removing it from the task count array
    taskCount.shift();

    // calculate the number of idle slots by subtracting each task count from the available slots
    // important: if there is another task with the same count as the most frequently occuring task, one must be subtracted from its count
    // eg. ['A', 'A', 'B', 'B', 'C'] n = 3
    // A -> __ -> __ -> __ -> A (totalAvailableSlots = 3)
    // A -> B -> C -> idle -> A -> B
    // idleSlots = totalAvailableSlots - countOfTaskB - countofTaskC = 3 - 1 - 1 = 1
    // where countOfTaskB = totalCountOfTaskB - 1 as task 'B' occurs just as frequently as 'A'
    idleSlots = totalAvailableSlots;
    taskCount.forEach((count) => {
        idleSlots -= count === mostFrequentTaskCount ? (mostFrequentTaskCount - 1) : count;
    });
    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};