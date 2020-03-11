/*
 * @Author: your name
 * @Date: 2020-03-10 17:27:48
 * @LastEditTime: 2020-03-10 17:32:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/posorder.js
 */

var node = require('./data');

// 后序遍历
function posOrder(node) {
  if(node){
    var a = [];
    var result = [];
    a.push(node);
    while(a.length !==0){
      var node = a.pop();
      result.unshift(node.value);
      if(node.left) a.push(node.left);
      if(node.right) a.push(node.right);
    }
    console.log(result);
  }
}

posOrder(node)