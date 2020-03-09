/*
 * @Author: your name
 * @Date: 2020-03-09 17:23:00
 * @LastEditTime: 2020-03-09 17:39:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/model/ publish-subscribe.js
 */
function observe(obj) {
  if (!obj || typeof obj !== Object) return;
  Object.keys(obj).forEach((key) => {
    defineReactive(obj,key,obj[key])
  })
}

function defineReactive(obj,key,val) {
  var dep = new Dep();
  Object.defineProperty(obj,key,{
    enumerable: true,
    configurable: true,
    get() {
      dep.addSub(Dep.target)
      return val
    },
    set(newVal) {
      if (val === newVal) return;
      dep.nofity();
    }
  })
}

class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach(sub=>{
      sub.update();
    })
  }
}

class Watcher {
  constructor() {
    Dep.target = this
  }
  update() {
    console.log('视图更新')
  }
}
Dep.target = null;

class Vue {
  constructor(options) {
    this._data = options.data
    observe(this._data)
    new Watcher()
    console.log('render~', this._data.test);
  }
}

let o = new Vue({
  data: {
      test: "I am test."
  }
});
o._data.test = "hello,world."; 