/**
 * Binary Trees
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 */

 /**
  * Given a binary tree, return the preorder traversal of its nodes' values.
  *
  * Example:
  * Input: [1,null,2,3]
  *     1
  *       \
  *         2
  *       /
  *     3
  * Output: [1,2,3]
  *
  * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
    traverseTree(root, result);
    return result;
};

/*
* Base case: node === null
* Recursive sequence:
* - Add the value of the current node to result list
* - Visit left node
* - Visit right node
*/
var traverseTree = function(node, result) {
    if(node === null) {
        return;
    } 
    result.push(node.val);
    traverseTree(node.left, result);
    traverseTree(node.right, result);

}

// Tests!
const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);

a.left = null;
a.right = b;
b.left = c;

console.log(preorderTraversal(a));