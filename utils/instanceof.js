function myInstanceof(obj, constructorFn) {
  let prototype = constructorFn.prototype;
  obj = obj.__proto__;
  while (true) {
    if (obj === null || obj === undefined) {
      return false;
    }
    if (prototype === obj) {
      return true;
    }
    obj = obj.__proto__;
  }
}

function a(){}
console.log(myInstanceof(a, Function)) //true