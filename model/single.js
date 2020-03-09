/*
 * @Author: your name
 * @Date: 2020-03-09 16:13:23
 * @LastEditTime: 2020-03-09 16:15:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/model/single.js
 */
class Singleton {
  constructor() {

  }
}

Singleton.getInstance = (function() {
  let instance;
  if (!instance) {
    instance = new Singleton()
  }
  return instance
})()

let s1 = Singleton.getInstance
let s2 = Singleton.getInstance
console.log(s1 === s2) // true