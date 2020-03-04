Function.prototype.mockBind = function() {
  const [objThis,...args] = arguments;
  const _this = this;
  return function () {
    _this.apply(objThis,args);
  }
}
this.name = 'ahha';
const obj = {
  name: 'coco',
  getName: function(){
    console.log(this.name)
  }
}
const newFn = obj.getName;
const lastFn = newFn.mockBind(obj);
lastFn();

