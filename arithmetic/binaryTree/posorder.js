/*
 * @Author: your name
 * @Date: 2020-03-10 17:27:48
 * @LastEditTime: 2020-03-12 17:33:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/posorder.js
 */

var node = require('./data');

// 后序遍历
// 使用两个栈来操作，栈cache用来对栈中的节点依次进行出栈操作，如果有子节点，则将其子节点执行入栈操作，栈result用来收集栈cache pop出来的节点；
function posOrder(node) {
  if (node) {
    var cache = [];
    var result = [];
    if (node) {
      cache.push(node);
      while (cache.length > 0) {
        var node = cache.pop();
        result.unshift(node.value);
        if (node.left) cache.push(node.left);
        if (node.right) cache.push(node.right);
      }
    }
  }
  console.log(result);
}

posOrder(node)