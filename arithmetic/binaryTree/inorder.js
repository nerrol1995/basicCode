/*
 * @Author: your name
 * @Date: 2020-03-10 17:12:08
 * @LastEditTime: 2020-03-10 17:57:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/inorder.js
 */

// 中序遍历
var node = require('./data');

function inOrder(node) {
  var stack = [];
  while(stack.length>0 || node) {
    if(node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      console.log(node.value);
      node = node.right
    }
  }
}

inOrder(node);