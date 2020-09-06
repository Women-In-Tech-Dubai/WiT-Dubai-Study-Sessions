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
 * Output: Banana & Melon
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

// Tabulation
// Formula: dp[i][c] = max (dp[i-1][c], profits[i] + dp[i-1][c-weights[i]])
let solveKnapsack = function (profits, weights, capacity) {
   if (!profits.length || !weights.length || capacity <= 0) {
      return 0;
   }

   /**
    * [
    *    [0, 0, 0, 0, 0, 0],
    *    [0, 0, 0, 0, 0, 0],
    *    [0, 0, 0, 0, 0, 0],
    *    [0, 0, 0, 0, 0, 0]
    * ]
    */
   let dp = Array(profits.length).fill(0).map(() => Array(capacity + 1).fill(0));

   // pre-populate the first row with the profit of the (only) item we have, as long as it's within capacity
   for(let c = 0; c <= capacity; c++) {
      if (weights[0] <= c) {
         dp[0][c] = profits[0];
      }
   }

   // O(N * C)
   for(let i = 1; i < profits.length; i++) {
      for(let c = 1; c <= capacity; c++) {
         let profitIncludingItem = 0;
         if (weights[i] <= c) {
            profitIncludingItem = profits[i] + dp[i-1][c-weights[i]];
         }
         let profitExcludingItem = dp[i-1][c];
         dp[i][c] = Math.max(profitIncludingItem, profitExcludingItem);
      }
   }
   console.log(dp);

   return dp[profits.length-1][capacity];
}

const profits = [4, 5, 3, 7];
const weights = [2, 3, 1, 4];
console.log(solveKnapsack(profits, weights, 5));