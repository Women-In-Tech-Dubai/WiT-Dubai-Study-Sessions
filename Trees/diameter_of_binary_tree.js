/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * 
 * Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 * 
 * Example:
 * Given a binary tree
 * 
          1
         / \
        2   3
       / \     
      4   5    
 * 
 * Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
 * Note: The length of path between two nodes is represented by the number of edges between them.
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let queue = [];
    let maxDiameter = 0;
    queue.push(root);

    while (queue.length != 0) {
         console.log(queue.length)
         let node = queue.unshift();
         let diameter = calculateDepth(node.left) + calculateDepth(node.right);
         if (diameter > maxDiameter) {
              maxDiameter = diameter;
         }
         if (node.left) {
              queue.push(node.left);
         }
         if (node.right) {
              queue.push(node.right);
         }
    }
    return maxDiameter;
};

const calculateDepth = (node) => {
     if (!node) {
          return 0;
     }
     let height = 1 + Math.max(calculateDepth(node.left), calculateDepth(node.right));
     return height;
}