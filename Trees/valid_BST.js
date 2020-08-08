/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Example 1: 
 * Input: [2,1,3]
 * Output: true
 * 
 * Example 2:
 * Input: [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 * 
 * 
 *                  5
 *              1       4
 *                    3     6
 */
/**
 * Base case:
 * 1. node === null
 * 2. node.val <= min || node.val >= max
 * 
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (root === null) {
        return true;
    }
    if (root.left === null && root.right === null) {
        return true;
    }

    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};


const helper = (node, min, max) => {
    if (node === null) {
        return true;
    }

    if (node.val <= min || node.val >= max) {
        return false;
    }

    return helper(node.left, min, node.val) && helper(node.right, node.val, max);
}

/**
 *              10
 *          5           15
 *                  6       20
 */

// [10,5,15,null,null,6,20]
let root = new TreeNode(10);
let a = new TreeNode(5);
let b = new TreeNode(15);
let c = new TreeNode(6);
let d = new TreeNode(20);
// let e = new TreeNode(90);

root.left = a;
root.right = b;
a.left = null;
a.right = null;
b.left = c;
b.right = d;
c.left = null;
c.right = null;
d.left = null;
d.right = null;
// e.left = null;
// e.right = null;

console.log(isValidBST(root));
