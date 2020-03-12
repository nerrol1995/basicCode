/*
 * @Author: your name
 * @Date: 2020-03-11 17:39:12
 * @LastEditTime: 2020-03-11 18:00:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/hasPathSum.js
 */

var node = require('./data');
function hasPathSum(node,sum){
  if (!node || sum < 0) return false;
  if (!node.left && !node.right) return node.value === sum;
  return hasPathSum(node.left,sum - node.value) || hasPathSum(node.right,sum - node.value)
}

console.log(hasPathSum(node,10))