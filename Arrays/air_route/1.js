/*

Assume a system that divides shipping routes using flight optimization routing systems to a cluster of aircrafts that can fulfill these routes.
Each shipping route is identified by a unique integer identifier requires a fixed non-zero amount of travel distance between airports, and is defined to be either a forward shipping route or a return shipping route Identifiers are guaranteed to be unique within their own route type, but not across route types

Each aircraft should be assigned two shipping routes at once: one forward route and one return route. Due to the complex scheduling of flight plans, all aircraft have a fixed maximum operating travel distance, and cannot be scheduled to fly a shipping route that requires more travel distance than the prescribed maximum operating travel distance. The goal of the system is to optimize the total operating travel distance of a given aircraft, A forward/return shipping route pair is considered to be "optimal" if there does not exist another pair that has a higher operating travel distance than this pair, and also has a total less than or equal to the maximum operating travel distance of the aircraft.

For example, if the aircraft has a maximum operating travel distance of 3000 miles, a forward/return shipping route pair using a total of 2900 miles would be optimal if there does not exist a pair that uses a total operating travel distance of 3000 miles, but Would not be considered optimal if such a pair did exist.

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
}