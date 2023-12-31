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
 * @return {number[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var inorderTraversal = function(root) {
    const result = [];

    function inorder(node) {
        if (node !== null) {
            inorder(node.left);
            result.push(node.val);
            inorder(node.right);
        }
    }

    inorder(root);

    return result;
};
