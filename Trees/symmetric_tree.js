/**
 * https://leetcode.com/problems/symmetric-tree/
 */

/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3
*
* But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
*/
 /**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    return helper(root.left, root.right);
};

/**
 * Base cases:
 * - left === null || right === null return left === right
 * - left.val !== right.val return false
 *
 * Recursive sequence:
 * - (leftNode.left, rightNode.right)
 * - (leftNode.right, rightNode.left)
 */
const helper = (leftNode, rightNode) => {
    if (leftNode === null || rightNode === null) {
        return leftNode === rightNode;
    }
    if (leftNode.val != rightNode.val) {
        return false;
    }
    return helper(leftNode.left, rightNode.right) && helper(leftNode.right, rightNode.left);
 }

 // Tests! [1,2,2,3,4,4,3]

//  1
//  / \
// 2   2
//  \   \
//  3    3
 const a = new TreeNode(1);
 const b = new TreeNode(2);
 const c = new TreeNode(2);
 const d = new TreeNode(3);
 const e = new TreeNode(4);
 const f = new TreeNode(4);
 const g = new TreeNode(3);

 a.left = b;
 a.right = c;
 b.left = null;
 b.right = d;
 c.left = null;
 c.right = g;


 console.log(isSymmetric(a));