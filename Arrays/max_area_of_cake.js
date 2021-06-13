/**
 * https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 *
 */

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(height, width, horizontalCuts, verticalCuts) {
    let maxHorizontal = 0;
    let maxVertical = 0;
    const mod = 1000000007;

    horizontalCuts.sort((a, b) => a - b);
    maxVertical = height - horizontalCuts[horizontalCuts.length - 1];
    for(let i = 1; i < horizontalCuts.length; i++) {
        maxVertical = Math.max(maxVertical, horizontalCuts[i] - horizontalCuts[i-1]);
    }
    
    verticalCuts.sort((a, b) => a - b);
    maxHorizontal = width - verticalCuts[verticalCuts.length - 1];
    for(let i = 1; i < verticalCuts.length; i++) {
        maxHorizontal = Math.max(maxHorizontal, verticalCuts[i] - verticalCuts[i - 1]);
    }

    return (maxHorizontal * maxVertical) % mod;
};

console.log(maxArea(5, 4, [3,1], [1]));
console.log(maxArea(5, 4, [1,2,4], [1,3]));
console.log(maxArea(1000000000, 1000000000,[2], [2]));