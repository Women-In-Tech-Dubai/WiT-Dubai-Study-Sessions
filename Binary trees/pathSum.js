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
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let runningSum = 0;
    return helper(root, runningSum, sum);
};

/**
 * Base cases: 
 * - node === null
 * - node.val + runningSum === targetSum && isLeafNode
 * 
 * Recursive sequence:
 * - visit left node
 * - visit right node
 */
function helper(node, runningSum, targetSum){
    if (node === null) {
        return false;
    }
    // let currentSum = runningSum + node.val;
    console.log(node.val, runningSum + node.val)
    if(node.right===null && node.left===null && (runningSum + node.val) ==targetSum){
        console.log('true', runningSum)
        return true;
    }
    return (helper(node.left, (runningSum + node.val), targetSum) || helper(node.right, (runningSum + node.val), targetSum));
}

const a = new TreeNode(5);
const b = new TreeNode(4);
const c = new TreeNode(8);
const d = new TreeNode(11);
const e = new TreeNode(13);
const f = new TreeNode(4);
const g = new TreeNode(7);
const h = new TreeNode(2);
const i = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;
d.left = g;
d.right = h;
f.right = i;

console.log(hasPathSum(a, 22));