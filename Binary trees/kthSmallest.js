/**
 * Binary Trees
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */

  /**
  * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
  *
  * Note: A leaf is a node with no children.
  *
  * Example 1:
  * Input: root = [3,1,4,null,2], k = 1
  *               3
  *             /   \
  *           1      4
  *            \
  *             2
  * Output: 1
  *
  * Example 2:
  * Input: root = [5,3,6,2,4,null,null,1], k = 3
  *               5
  *             /   \
  *           3      6
  *          / \
  *         2   4
  *        /
  *       1
  * Output: 3
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
  * Constraints:
  * - The number of elements of the BST is between 1 to 10^4.
  * - You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
  */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const arr = inOrderTraversal(root, []);
    if (arr.length) {
        return arr[k-1];
    }
    return 0;
};

const inOrderTraversal = (root, traversedArray) => {
    if (root === null) {
        return traversedArray;
    }
    inOrderTraversal(root.left, traversedArray);
    traversedArray.push(root.val);
    inOrderTraversal(root.right, traversedArray);
    return traversedArray;
}

// * Example 2:
//   * Input: root = [5,3,6,2,4,null,null,1], k = 3
//   *               5
//   *             /   \
//   *           3      6
//   *          / \
//   *         2   4
//   *        /
//   *       1
//   * Output: 3


const a = new TreeNode(5);
 const b = new TreeNode(3);
 const c = new TreeNode(6);
 const d = new TreeNode(2);
 const e = new TreeNode(4);
 const f = new TreeNode(1);

 a.left = b;
 a.right = c;
 b.right = e;
 b.left = d;
 d.left = f;

 console.log(kthSmallest(a, 3));