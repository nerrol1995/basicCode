/*
 * @Author: your name
 * @Date: 2020-03-10 17:54:17
 * @LastEditTime: 2020-03-10 17:57:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/BFS.js
 */
var node = require('./data');

// 广度优先遍历
function BFS(node) {
  if (!node) return;
  var que = [];
  que.push(node);
  while (que.length !== 0) {
    var node = que.shift();
    console.log(node.value);
    if (node.left) que.push(node.left);
    if (node.right) que.push(node.right);
  }
}

BFS(node)