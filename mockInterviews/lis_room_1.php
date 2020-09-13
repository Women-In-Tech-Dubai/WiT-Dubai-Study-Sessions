/**
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 *
 *
 * Example:
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 *
 * Note:
 * There may be more than one,LIS combination, it is only necessary for you to return the length.
 * Your algorithm should run in O(n2) complexity.
 * 
 * [9,7,8,1,2,3,4,5]
 *
 */


<?php


class Solution {



public function lengthOfLIS($nums) {
        
    if (empty($nums)) {
        return 0;
    }

    return $this->lengthOfLISHelper($nums,0);
}

public function lengthOfLISHelper($numarray, $index, $prev) {
    
    if ($index >= count($numarray)) {
        return 0;
    }

    if ($numarray[$index+1] > $numarray[$index]) {
         $r1 =  1+ $this->lengthOfLISHelper($numarray,$index+1, $numarray[$index]);
    } 
        
    $r2 =  $this->lengthOfLISHelper($numarray,$index+1, $numarray[$index]);
    
    

    return max($r1, $r2);
}
}
