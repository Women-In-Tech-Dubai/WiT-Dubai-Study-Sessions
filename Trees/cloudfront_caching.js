/*
https://aonecode.com/oa-cloudfront-caching


A company owns N warehouses, identified as warehouse[0 to N-1]. The owner would like to measure the maintenance cost. A warehouse will be able to share the stock with other connected warehouses, making it less costly to restock.

The method to evaluate the maintenance cost is:

1. If a warehouse is not connected to any others, its maintenance cost is 1.
2. If multiple warehouses are connected, the total maintenance cost of the group of connected warehouses will be the ceiling of the square root of K, where K is the number of warehouses in the group. ceil(sqrt of number of warehouses in group)
3. A warehouse connected to any of the warehouses in a group will be able to share stock with all in the group. For example, if warehouse 0 and warehouse 1 are connected, and warehouse 1 and warehouse 2 are connected, consider 0, 1 and 2 in the same group.
4. The total maintenance cost is the sum of all costs.

Given the number of warehouses N and a 2d array, where every subarray is a pair of connected warehouses, build a function that return the total maintenance cost.
5. ptsd
-------

Examples:

Input
n = 4
connections = [[0, 2], [1, 2]]

Output
3

Explanation
Warehouses 0, 1, 2 are in the same group, the cost is ceiling(sqrt(3)) = 2.
Warehouse 3 costs 1.
Total cost is 2 + 1 = 3.

-------

Input
n = 10
connections [[2, 6], [3, 5], [0, 1], [2, 9], [5, 6]]

Output
8

Explanation

Warehouses 0, 1 are in the same group, the cost is ceiling(sqrt(2)) = 2. Warehouses 2, 3, 5, 6, 9 are in the same group, the cost is ceiling(sqrt(5)) = 3.
Warehouse 4 costs 1.
Warehouse 7 costs 1.
Warehouse 8 costs 1.
Total cost is 2+3+1+1+1 = 8
*/

/*
1. Generate the graph based on n and connections

function Node (val, connections) {
    this.value = val;
    this.connections = connections;
    this.visited = false;
}

2. For 0 to n
2a. Check if node 0 connections: mark as visited, add 1 to totalMaintenanceCost
2b. Check if node has not been visited and has 1 or more connections: count all connected nodes => add ceil(sqrt(connections+1)) to totalMaintenanceCost
3. Return totalMaintenanceCost

*/

class Node {
    constructor(val, connections) {
        this.value = val;
        this.connections = connections;
        this.visited = false;
    }
}

// Returns an array of the nodes connected directly to n
function getDirectConnectedNodes(n, connections) {
    let edges = [];
    connections.map((connection) => {
        if (n === connection[0]) {
            edges.push(connection[1]);
        }
        if (n === connection[1]) {
            edges.push(connection[0]);
        }
    })
    return edges;
}

// Count all nodes that are directly and indirectly connected
const countConnectedNodes = (node, graph) => {
    if (node.visited) {
        return 0;
    }
    node.visited = true;
    if (node.connections.length == 0) {
        return 0;
    }
    let count = 1;
    for (let i = 0; i < node.connections.length; i++) {
        count += countConnectedNodes(graph[node.connections[i]], graph);
    }
    return count;
}

const costEvaluation = (n, connections) => {
    let graph = [];
    let totalMaintenanceCost = 0;

    // Generate the graph with each node's connections i.e. edges
    for (let i = 0; i < n; i++) {
        let connectedNode = new Node(i, []);
        connectedNode.connections = getDirectConnectedNodes(i, connections);
        graph.push(connectedNode)
    }
    console.log(JSON.stringify(graph));

    // For each node:
    // - If the node is a not connected to any others, increment total cost by 1
    // - If the node has connections, count all directly and indirectly connected nodes and increment cost by the formula ceil(sqrt(count of nodes)) 
    for (let i = 0; i < graph.length; i++) {
        if (!graph[i].visited && graph[i].connections.length === 0) {
            graph[i].visited = true;
            totalMaintenanceCost += 1;
        } else if (!graph[i].visited && graph[i].connections.length > 0) {
            totalMaintenanceCost += Math.ceil(Math.sqrt(countConnectedNodes(graph[i], graph)));
        }
    }
    return totalMaintenanceCost;
}

console.log(costEvaluation(10, [[2, 6], [3, 5], [0, 1], [2, 9], [5, 6]]));
console.log(costEvaluation(4, [[1, 0], [0, 1]]));