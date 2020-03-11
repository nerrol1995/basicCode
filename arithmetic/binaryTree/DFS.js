/*
 * @Author: your name
 * @Date: 2020-03-10 17:53:27
 * @LastEditTime: 2020-03-10 17:53:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/DFS.js
 */
var node = require('./data');

// 深度优先遍历
function DFS(node){
  if(!node) return null;
  var stack = [];
  stack.push(node);
  while(stack.length !== 0){
    var node = stack.pop();
    console.log(node.value);
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
}

DFS(node)