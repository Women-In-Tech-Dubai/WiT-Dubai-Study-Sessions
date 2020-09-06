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


let solveKnapsack = function (profits, weights, capacity) {

}