/**
 * Binary Trees
 * https://leetcode.com/problems/path-sum/
 */

  /**
  * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
  *
  * Note: A leaf is a node with no children.
  *
  * Example:
  * Input: sum = 22
  *               5
  *             /   \
  *           4      8
  *          /      /  \
  *        11      13   4
  *       /  \            \
  *      7    2            1
  * Output: true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22
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
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
};