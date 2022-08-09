/**
 * Breadth first search
 * 
 * Given a binary tree and a target value, use BFS to return whether the target value exists or not.
 * 
 * Input: p = [1,2,3,4,5,6], target = 6
 *        1
 *    2      3
 * 4    5  6   null 
 * 
 * 
 * Pseudocode:
 * 1. queue = [] FIFO - add to the queue (array.push()), pop from the queue (array.shift());
 * 2. Push the root to the queue
 * 3. while queue.isNotEmpty
 *      node = queue.shift() // Pop the first element in the queue
 *      if (node.val === target) {
 *        return true;
 *      }
 *      Push the node.left and node.right to the queue only if not null
 * 4. return false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {array} 
 */


var breadthFirstSearch = function (root, target) {

    let queue = [];
    queue.push(root);

    while (queue.length != 0) {
        let node = queue.shift();
        if (node.val === target) {
            return true;
        }
        if (node.left != null) {
            queue.push(node.left)
        }

        if (node.right != null) {
            queue.push(node.right)
        }
    }
    return false;
}

// Tests!
const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = null;

console.log(breadthFirstSearch(a, 5));
console.log(breadthFirstSearch(a, 10));
console.log(breadthFirstSearch(a, 11));
