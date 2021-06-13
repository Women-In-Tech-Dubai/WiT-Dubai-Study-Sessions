/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * 
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: Cheapest is: start on cost[1], pay that cost, and go to the top.


Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: Cheapest is: start on cost[0], and only step on 1s, skipping cost[3].

 */

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    if (cost.length == 1) {
        return cost[0];
    }
    
    // Calculate total cost when starting at 0th step and at the 1st step
    return Math.min(calculateCost(0, cost), calculateCost(1, cost));
};
const memo = {};
const calculateCost = function (step, cost) {
    // Base case/terminating condition
    if (step >= cost.length) {
        return 0;
    }
    
    if (memo[step]) {
        return memo[step];
    }

    memo[step] = cost[step] + Math.min(calculateCost(step+1, cost), calculateCost(step+2, cost));
    return memo[step];
}
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));