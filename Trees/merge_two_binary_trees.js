/**
 * 
 * https://leetcode.com/problems/merge-two-binary-trees/
 * 
 * You are given two binary trees root1 and root2.
 * 
 * Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
 * 
 * Return the merged tree.
 * 
 * Note: The merging process must start from the root nodes of both trees.
 * 
 * 
 * Example 1:
 * Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
 * Output: [3,4,5,5,4,null,7]
 * 
 * Example 2:
 * Input: root1 = [1], root2 = [1,2]
 * Output: [2,2]
 * 
 * 
 * Constraints:
 * The number of nodes in both trees is in the range [0, 2000].
 * -10^4 <= Node.val <= 10^4
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

 var mergeTrees = function(root1, root2) {
    return traverse(root1, root2, new TreeNode());
};

const traverse = (node1, node2, newNode) => {
    // Base condition
    if (node1 == null && node2 == null) {
        return;
    }
    if (!node1) {
        return node2;
    } else if (!node2) {
        return node1;
    }
    newNode.val = node1.val + node2.val;
    newNode.left = traverse(node1.left, node2.left, new TreeNode());
    newNode.right = traverse(node1.right, node2.right, new TreeNode());
    return newNode;
}