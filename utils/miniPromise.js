class MiniPromise {
  constructor(fn) {
    if (!isFunction(fn)) {
      throw new TypeError('constructor argument have to be a function')
    }
    this.status = 'pending'
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []
    const res = this.onFulfilled.bind(this)
    const rej = this.onRejected.bind(this)
    setTimeout(fn, null, res, rej)
  }

  onFulfilled(val) {
    if (hasThen(val)) {
      return val.then(res, rej)
    }
    if (this.status !== 'pending') {
      throw new Error(`onFulfilled was called multiple times`)
    }
    this.status = 'fulfilled'
    this.val = val
    this.resolvedCallbacks.forEach(cb => {
      cb.call(this, val)
    })
  }

  onRejected(err) {
    if (this.status !== 'pending') {
      throw new Error(`onRejected was called multiple times`)
    }
    if (hasThen(err)) {
      this.err = 'onRejected does not accept Promise argument'
    } else {
      this.err = err
    }
    this.status = 'rejected'
    this.rejectedCallbacks.forEach(cb => {
      cb.call(this, val)
    })
  }

  then(resFn, rejFn) {
    return new MiniPromise((res, rej) => {
      switch (this.status) {
        case 'pending':
          this.resolvedCallbacks.push(realResFn)
          this.rejectedCallbacks.push(realRejFn)
          break;
        case 'fulfilled':
          realResFn(this.val)
          break;
        case 'rejected':
          realRejFn(this.err)
          break;
      }

      function realResFn(val) {
        if (!isFunction(resFn)) {
          return res(val)
        }
        handleNext(resFn(val))
      }

      function realRejFn(err) {
        if (!isFunction(rejFn)) {
          return rej(err)
        }
        handleNext(rejFn(err))
      }

      function handleNext(fn) {
        try {
          if (hasThen(fn)) {
            fn.then(res, rej)
          } else {
            res(fn)
          }
        } catch (e) {
          rej(e)
        }
      }
    })
  }

  /**
   * `promise.catch(rejFn)` is nothing but `promise.then(null, rejFn)`
   */
  catch (rejFn) {
    return this.then(null, rejFn)
  }

  /**
   * Execute an array of Promise objects, collect all result(call `then`) and
   * return them in an array.
   *
   * But if any one of the objects triggered reject, just ignore the result
   * and reject directly.
   */
  static all(promiseArr) {
    if (!Array.isArray(promiseArr)) {
      throw new TypeError('Promise.all need Array object as argument')
    }

    return new MiniPromise((res, rej) => {
      var count = promiseArr.length
      const result = []
      promiseArr.forEach((p, idx) => p.then(handle(idx), rej))
      /* Use closure to hold index */
      function handle(idx) {
        return v => {
          result[idx] = v
          if (--count === 0) {
            res(result)
          }
        }
      }
    })
  }

  /**
   * Execute an array of Promise objects, only return the result of the one
   * who call `then` first.
   */
  static race(promiseArr) {
    if (!Array.isArray(promiseArr)) {
      throw new TypeError('Promise.race need Array object as argument')
    }
    return new MiniPromise(
      (res, rej) => promiseArr.forEach(p => p.then(res, rej))
    )
  }

  /**
   * If you need to start a Promise chain from a basic value, just use this.
   * e.g. Promise.resolve(1).then(console.log)
   */
  static resolve(v) {
    return new MiniPromise((res, _) => res(v))
  }

  /**
   * Just like Promise.resolve, but start with an rejection.
   */
  static reject(v) {
    return new MiniPromise((_, rej) => rej(v))
  }
}

function hasThen(obj) {
  return obj && isFunction(obj.then)
}

function isFunction(obj) {
  return typeof obj === 'function'
}



function fn1() {
  return new MiniPromise(function (resolve) {
    setTimeout(function () {
      console.log('执行fn1')
      resolve(1)
    }, 1000)
  })
}

function fn2(id) {
  return new MiniPromise(function (resolve) {
    setTimeout(function () {
      console.log(`id是${id}`)
      resolve(2)
    }, 1000)
  });
}

fn1()
  .then(fn2)
  .then(function (res) {
    console.log(res);
  }, function (error) {
    console.log(error);
  });