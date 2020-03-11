/*
 * @Author: your name
 * @Date: 2020-03-10 16:30:44
 * @LastEditTime: 2020-03-10 17:57:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/preorder.js
 */
var node = require('./data');

// 前序遍历
function preorder(node) {
  if(!node) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(node)
  while(stack.length !== 0) {
    node = stack.pop()
    console.log(node.value)    
    if(node.right) stack.push(node.right)
    if(node.left) stack.push(node.left)
  }
}

preorder(node)