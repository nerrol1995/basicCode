/**
 * 1.新建一个对象
 * 2.创建与构造函数间的原型链
 * 3.绑定this并执行构造函数
 * 4.如果构造函数返回值为复杂数据类型则直接返回构造函数返回的复杂数据类型，否则返回这个新对象
 */

 function create() {
   let obj = {};
   const [contructorFn,...args] = arguments;
   obj.__proto__ = contructorFn.prototype;
   const result = contructorFn.apply(obj,args);
   return result instanceof Object ? result : obj;
 }

 export default create;