
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    return s.length === 0 ? 0 : helper(0, s);
};

var helper = function (index, s) {

    let memo = []; //?
    // Ignore '0's
    if (s[index] === '0') {
        return 0;
    }

    // Reached end of string
    if (index === s.length - 1 || index === s.length) {
        return 1;
    }

    // Consider as a single digit
    let ways = helper(index + 1, s);

    // Consider as a pair (and ensure <= 26)
    let pair = parseInt(s.substring(index, index + 2));
    if (pair <= 26) {
        ways += helper(index + 2, s);
    }

    return ways;
}



var numDecodingsMemo = function (s) {
    let memo = [];
    return s.length === 0 ? 0 : helperMemo(0, s, memo);
};

// "1234"
// [2, 2, 1, 1]
var helperMemo = function (index, s, memo) {

    // Ignore '0's
    if (s[index] === '0') {
        return 0;
    }

    // Reached end of string
    if (index === s.length - 1 || index === s.length) {
        return 1;
    }

    if (memo[index]) {
        return memo[index];
    }

    // Consider as a single digit
    let ways = helperMemo(index + 1, s, memo);

    // Consider as a pair (and ensure <= 26)
    let pair = parseInt(s.substring(index, index + 2));
    if (pair <= 26) {
        ways += helperMemo(index + 2, s, memo);
    }

    memo[index] = ways;

    return ways;
}


// tabulation
// 1234
// dp[0] = 1
// dp[1] = 1
// dp[2] = 1 + 1 = 2
// dp[3] = 2 + 1 = 3
// dp[4] = 3 + 0 = 3
var numDecodingsTabulation = function (s) {
    let dp = new Array(s.length + 1).fill(0);
    if (s.length === 0) {
        return 0;
    }

    dp[0] = 1;
    dp[1] = (s[0] === '0') ? 0 : 1;

    for (let i = 2; i < dp.length; i++) {
        if (s[i - 1] !== '0') {

            // Checking for one digit
            dp[i] += dp[i - 1];
        }

        const pair = parseInt(s.substring(i - 2, i));

        // check if it's a pair
        if (pair >= 10 && pair <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    console.log(dp);

    return dp[s.length];
};

console.log(numDecodingsTabulation("1234"));