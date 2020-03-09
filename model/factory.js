/*
 * @Author: your name
 * @Date: 2020-03-09 16:10:14
 * @LastEditTime: 2020-03-09 16:12:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/model/factory.js
 */
class Man {
  constructor(name) {
    this.name = name;
  }

  alertName() {
    console.log(this.name)
  }
}

class Factory {
  static create(name) {
    return new Man(name)
  }
}

Factory.create('coco').alertName()