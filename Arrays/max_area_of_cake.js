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
    for(let i = 0; i < horizontalCuts.length; i++) {
        let prevEdge = horizontalCuts[i - 1] ? horizontalCuts[i - 1] : 0;
        maxVertical = Math.max(maxVertical, horizontalCuts[i] - prevEdge);
        console.log(`maxVertical`, maxVertical);

        if (i == horizontalCuts.length - 1) {
            maxVertical = Math.max(maxVertical, height - horizontalCuts[i]);
        }
        console.log(`maxVertical`, maxVertical);

    }

    console.log(`maxVerticalFinal`, maxVertical);
    
    verticalCuts.sort((a, b) => a - b);
    for(let i = 0; i < verticalCuts.length; i++) {
        let prevEdge = verticalCuts[i - 1] ? verticalCuts[i - 1] : 0;
        maxHorizontal = Math.max(maxHorizontal, verticalCuts[i] - prevEdge);
        if (i == verticalCuts.length - 1) {
            maxHorizontal = Math.max(maxHorizontal, width - verticalCuts[i]);
        }
    }

    console.log(`maxHorizontal`, maxHorizontal);

    return maxHorizontal * maxVertical % 1000000007;
};

// console.log(maxArea(5, 4, [3,1], [1]));
// console.log(maxArea(5, 4, [1,2,4], [1,3]));
console.log(maxArea(1000000000, 1000000000,[2], [2]));