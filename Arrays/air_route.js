/*

Write an algorithm to optimize the sets of forward/return shipping route pairs that allow the aircraft to be optimally utilized, given a list of forward shipping routes and a list of return shipping routes.

Input

• maxTravelDist, an integer representing the maximum operating travel distance of the given aircraft

• forwardRouteList, a list of pairs of integers where the first integer represents the unique identifier of a forward shipping route and the second integer represents the amount of travel distance required by this shipping route

• returnRouteList, a list of pairs of integers where the first integer represents the unique identifier of a return shipping route and the second integer represents the amount of travel distance required by this shipping route

Output

Return a list of pairs of integers representing the pairs of IDs of forward and return shipping routes that optimally utilize the given aircraft. if no route is possible, return a list with empty pair

Examples

Example 1:

Input:
maxTravelDist = 7000
forwardRouteList = [[1,2000],[2,4000],[3,6000]]
returnRouteList = [[1,2000]]

Output:
[[2,1]]

Explanation:
There are only three combinations, [[1,1], [2,1], and [3,1] which have a total of 4000, 6000, and 8000 miles, respectively.
Since 6000 is the largest use that does not exceed 7000, [2,1] is the only optimal pair.

Example 2

Input:
maxTravelDist = 10000
forwardRouteList = [[1,3000], [2, 5000], [3, 7000], [4, 10000]]
returnRouteList = [[1, 2000], [2, 3000], [3, 4000], [4, 5000]]

Output:
[[2, 4], [3, 2]]

Explanation:
There are two pairs of forward and return shipping routes possible that optimally utilizes the given aircraft, Shipping Route ID#2 from the forwardRouteList requires 5000 miles travelled, and Shipping Route ID#4 from returnRouteList also requires S000 miles travelled. Combined, they add up to 10000 miles travelled.

Similarly. Shipping Route ID#3 from forwardRouteList requires 7000 miles travelled, and Shipping Route ID#2 from returnRouteList requires 3000 miles travelled These also add up to 10000 miles travelled. Therefore, the pairs of forward and return shipping routes that optimally utilize the aircraft are [2, 4], [3, 2].
*/

function routePairs(maxTravelDist, forwardRouteList, returnRouteList) {

    let optimalRouteDistance = 0;
    let optimalRoutes = [];

    // iterate through every possible forward & return route (combination)
    for (let forwardRoute of forwardRouteList) {
        for (let returnRoute of returnRouteList) {

            let distance = forwardRoute[1] + returnRoute[1];

            // check if the current forward/return route is optimal
            if (distance > optimalRouteDistance && distance <= maxTravelDist) {
                optimalRouteDistance = distance;
                optimalRoutes = [[forwardRoute[0], returnRoute[0]]];
            } else if (distance === optimalRouteDistance) {
                optimalRoutes.push([forwardRoute[0], returnRoute[0]]);
            }
        }
    }

    return optimalRoutes;
}

let maxTravelDist = 10000
let forwardRouteList = [[1,3000], [2, 5000], [3, 7000], [4, 10000]]
let returnRouteList = [[1, 2000], [2, 3000], [3, 4000], [4, 5000]]
console.log(routePairs(maxTravelDist, forwardRouteList, returnRouteList));