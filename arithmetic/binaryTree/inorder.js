/*
 * @Author: your name
 * @Date: 2020-03-10 17:12:08
 * @LastEditTime: 2020-03-11 17:17:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/inorder.js
 */

// 中序遍历
// 现将左子树入栈，直到叶子节点入栈成功，再从叶子节点开始遍历，如果有右节点，则将右节点入栈，否则这个节点自己出栈；
var node = require('./data');

function inOrder(node) {
  var stack = [];
  while(stack.length > 0 || node) {
    if(node){
      stack.push(node);      
      node = node.left;
    } else {
      node = stack.pop();
      console.log(node.value);
      node = node.right;
    }
  }
}

inOrder(node);