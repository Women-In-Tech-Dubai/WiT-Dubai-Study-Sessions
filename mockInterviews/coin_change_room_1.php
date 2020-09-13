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


<?php

$coinsarray = [2,5, 1];
$total = 11;
$result =  coinsarray($coinsarray, $total);

class Solution {

    /**
     * @param Integer[] $coins
     * @param Integer $amount
     * @return Integer
     */
    public function coinChange(array $coinsarray, $total) {

    if (empty($coinsarray)) return -1;
    $sorted = sort($coinsarray); // 5,2
    $lastVal  = $sorted[count($sorted - 1)];
    if ($lastVal > $total) { return -1;}

    $firstVal = $sorted[0]; // first index

    $result = $this->helper($coinsarray, $total, 0);
    return $result;

}
    public function helper($coinsarray, $total, $calc) {

    if (empty($coinsarray) ) {
        return -1;
    }

    $firstVal = $coinsarray[0];

    if ($firstVal <= $total) {

        $calc++;
        $total = $total-$firstVal;

        if ($total == 0) {
            return $calc;
        }
    } else {
        unset($coinsarray[0]);
    }

    return $this->helper($coinsarray, $total, $calc);
}
}
