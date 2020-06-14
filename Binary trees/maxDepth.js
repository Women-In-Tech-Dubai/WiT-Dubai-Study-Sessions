/**
 * Binary Trees
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

  /**
  * Given a binary tree, find its maximum depth.
  * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  *
  * Note: A leaf is a node with no children.
  *
  * Example:
  * Input: [3,9,20,null,null,15,7]
  *     3
  *   /   \
  * 9       20
  *       /    \
  *     15      7
  *
  * Output: 3
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
 * @return {number}
 */
var maxDepth = function(root) {
   return helper(root);
};

const helper = (node) => {
    if (node === null) {
        return 0;
    }
    let height = 1 + Math.max(helper(node.left), helper(node.right));
    return height;
}

// [3,9,20,null,null,15,7]
const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(maxDepth(a));