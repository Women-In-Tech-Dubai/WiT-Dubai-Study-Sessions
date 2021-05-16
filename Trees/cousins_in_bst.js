/*
https://leetcode.com/problems/cousins-in-binary-tree/


In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

Example 1:
Input: root = [1,2,3,4], x = 4, y = 3
Output: false

Example 2:
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true

Example 3:
Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false

Constraints:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. Let queue = [], xNode = null, yNode = null
 * 2. Push root onto queue => [value, level, parent] => [root.value, 0, null]
 * 3. While (!queue.empty())
 * 3a. Dequeue node => level
 * 3b. if (node.value == x) { set xNode = node }
 * 3b. if (node.value == y) { set yNode = node }
 * 3c. Process each child (node.left and node.right) => push child onto queue => [child.value, level+1, node]
 * 4. return xNode.level == yNode.level && xNode.parent != yNode.parent
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let queue = [];
    let xNode = null;
    let yNode = null;

    // Push node onto queue in the format: [node, level, parent]
    queue.push([root, 0, null]);

    while (queue.length) {
        // Dequeue node and retrieve it's level
        let node = queue.shift(queue);
        let level = node[1];
        if (node[0].val == x) {
            xNode = node;
        }
        if (node[0].val == y) {
            yNode = node;
        }
        // Found both nodes, no need to traverse the tree further
        if (xNode && yNode) {
            break;
        }
        // Process each child i.e left and right nodes (if they exist)
        if (node[0].left) {
            queue.push([node[0].left, level+1, node[0]]);
        }
        if (node[0].right) {
            queue.push([node[0].right, level+1, node[0]]);
        }
    }
    // Return whether x and y are on the same level AND have different parents
    return xNode[1] == yNode[1] && xNode[2] != yNode[2];
};