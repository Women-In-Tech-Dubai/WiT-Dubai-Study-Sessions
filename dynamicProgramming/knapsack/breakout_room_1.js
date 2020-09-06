/**
 * Dynamic Programming
 * Sunday, September 6th
 * https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews/RM1BDv71V60
 */

/**
 * Given two integer arrays to represent weights and profits of ‘N’ items
 * we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C’.
 * Each item can only be selected once, which means either we put an item in the knapsack or we skip it.
 *
 * Example:
 * Input:
    * Items: { Apple, Orange, Banana, Melon }
    * Weights: { 2, 3, 1, 4 }
    * Profits: { 4, 5, 3, 7 }
    * Capacity: 5
 * Output: 10 (Banana & Melon)
 *
 * Explanation:
    * Let’s try to put different combinations of fruits in the knapsack, such that their total weight is not more than 5:
    * Apple + Orange (total weight 5) => 9 profit
    * Apple + Banana (total weight 3) => 7 profit
    * Orange + Banana (total weight 4) => 8 profit
    * Banana + Melon (total weight 5) => 10 profit
    * This shows that Banana + Melon is the best combination, as it gives us the maximum profit and the total weight does not exceed the capacity.
 *
*/

// Validation checks
// 1. profits.length
// 2. weights.length

// Base cases:
// 1. currentIndex > profits.length
// 2. exceed capacity: capacity <= 0

// Recursive sequence/Recurrence relation
// 1. profitIncludingCurrentItem -> helper(profits, weights, currentIndex, capacity - weights[i])
// 2. profitExcludingCurrentItem -> helper(profits, weights, currentIndex, capacity)
let solveKnapsackRecursion = function (profits, weights, capacity) {
   if (!profits.length || !weights.length) {
      return 0;
   }

   const memo = [];

   return helper(profits, weights, 0, capacity, memo);
}

let helper = function (profits, weights, currentIndex, capacity, memo) {

   // base cases
   if (currentIndex >= profits.length || capacity <= 0) {
      return 0;
   }

   memo[currentIndex] = memo[currentIndex] ? memo[currentIndex] : [];

   if (memo[currentIndex][capacity]) {
      return memo[currentIndex][capacity];
   }

   // recurrence relation
   let profitIncludingCurrentItem = 0;
   if (weights[currentIndex] <= capacity) {
      profitIncludingCurrentItem = profits[currentIndex] + helper(profits, weights, currentIndex + 1, capacity - weights[currentIndex], memo);
   }

   let profitExcludingCurrentItem = helper(profits, weights, currentIndex + 1, capacity, memo);

   memo[currentIndex][capacity] = Math.max(profitIncludingCurrentItem, profitExcludingCurrentItem);
   return memo[currentIndex][capacity];
}

const profits = [4, 5, 3, 7];
const weights = [2, 3, 1, 4];

console.log(solveKnapsackRecursion(profits, weights, 5));