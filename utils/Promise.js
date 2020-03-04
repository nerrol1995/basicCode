function Promise(fn) {
  var state = 'pending',
    value = null,
    callbacks = [];

  this.then = function (onFulfilled, onRejected) {
    return new Promise(function (resolve, reject) {
      handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject
      });
    });
  };

  function handle(callback) {
    // console.log(callback)
    if (state === 'pending') {
      callbacks.push(callback);
      return;
    }
    var cb = state === 'fulfilled' ? callback.onFulfilled : callback.onRejected,
      ret;
    if (cb === null) {
      cb = state === 'fulfilled' ? callback.resolve : callback.reject;
      cb(value);
      return;
    }
    try {
      ret = cb(value);
      callback.resolve(ret);
    } catch (e) {
      callback.reject(e);
    }
  }

  function resolve(newValue) {
    console.log(`resolve中输出${newValue}`)
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (typeof then === 'function') {
        then.call(newValue, resolve, reject);
        return;
      }
    }
    state = 'fulfilled';
    value = newValue;
    execute();
  }

  function reject(reason) {
    state = 'rejected';
    value = reason;
    execute();
  }

  function execute() {
    setTimeout(function () {
      callbacks.forEach(function (callback) {
        handle(callback);
      });
    }, 0);
  }
  fn(resolve, reject);
}

function fn1() {
  return new Promise(function (resolve) {
    setTimeout(function(){
      console.log('执行fn1')
      resolve(1)
    },1000)
  })
}

function fn2(id) {
  return new Promise(function (resolve) {
    setTimeout(function(){
      console.log(`id是${id}`)
      resolve(2)
    },1000)
  });
}

fn1()
  .then(fn2)
  .then(function (res) {
    console.log(res);
  }, function (error) {
    console.log(error);
  });