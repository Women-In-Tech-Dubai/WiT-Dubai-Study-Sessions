/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * 
 * Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let seen = new Set();
    var dfs = function (node, target) {
        if (!node) {
            return false;
        }
        if (seen.has(target - node.val)) {
            return true;
        }
        seen.add(node.val);
        return dfs(node.left, target) || dfs(node.right, target);
    }
    return dfs(root, k);
};

// Tests!
const a = new TreeNode(5);
const b = new TreeNode(3);
const c = new TreeNode(6);
const d = new TreeNode(2);
const e = new TreeNode(4);
const f = new TreeNode(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = null;

console.log(findTarget(a, 9)); // Expected: true
console.log(findTarget(a, 10)); // Expected: true
console.log(findTarget(a, 20)); // Expected: false

const g = new TreeNode(1);
console.log(findTarget(g, 2)); // Expected: false