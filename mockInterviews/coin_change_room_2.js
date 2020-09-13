/**
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * Example 1:
    Input: coins = [1, 2, 5], amount = 11
    Output: 3
    Explanation: 11 = 5 + 5 + 1

    Example 2:
    Input: coins = [2], amount = 3
    Output: -1

Note:
You may assume that you have an infinite number of each kind of coin.

*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// [1, 2, 5]
var coinChange = function(coins, amount) {
    
    let smaller_coins = coins.filter((coin) => coin <= amount).sort((a,b) => b-a);
    console.log(smaller_coins);
    let remaining_amount = amount;
    let total_coins_required = -1;

    for(let i = 0; i < smaller_coins.length; i++) {
        if (remaining_amount <= 0) {
            break;
        }
        total_coins_required += parseInt(remaining_amount/smaller_coins[i]);
        console.log('total_coins_required', total_coins_required);
        remaining_amount %= smaller_coins[i]; 
        console.log('remaining_amount', remaining_amount);
    }

    return (total_coins_required == -1) || (remaining_amount !== 0) ? -1 : total_coins_required + 1;
}

console.log(coinChange([1, 2, 5, 7, 10], 21));
console.log(coinChange([2], 3));


// def coin_change(coins, amount)
// 	smaller_coins = coins.select{|coin| coin <= amount}

// 	remaining_amount = amount
//     total_coins_required = 0
    
//     smaller_coins.sort.reverse.each do |coin|
//     	break if remaining_amount <= 0

//         total_coins_required += remaining_amount/coin


//         remaining_amount = remaining_amount%coin

//     end	

//     total_coins_required
// endend
