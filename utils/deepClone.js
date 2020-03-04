function deepClone(obj) {
  if (!isObject(obj)) {
    throw errow('非对象')
  }

  let newObj = isArray(obj) ? [...obj] : {...obj};
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })
  return newObj;
}

function isObject(o) {
  return (typeof o === 'object' || typeof o === 'function') && typeof o !== null ;
}

function isArray(arr) {
  return Array.isArray(arr);
}


export default deepClone;
