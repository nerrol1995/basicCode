/*
 * @Author: your name
 * @Date: 2020-03-11 17:19:25
 * @LastEditTime: 2020-03-12 17:20:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/maxDepth.js
 */
// 二叉树最大深度
var node = require('./data');

function maxDepth(node) {
  if (!node) {
    return 0
  } else {
    var leftDepth = maxDepth(node.left);
    var rightDepth = maxDepth(node.right);
    var depth = leftDepth > rightDepth ? leftDepth : rightDepth;
    return depth + 1;
  }
}

console.log(maxDepth(node));