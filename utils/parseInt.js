/*
 * @Author: your name
 * @Date: 2020-03-17 17:53:22
 * @LastEditTime: 2020-03-17 18:03:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/utils/parseInt.js
 */
function _parseInt(str, radix) {
  let str_type = typeof str;
  let res = 0;
  if (str_type !== 'string' && str_type !== 'number') {
      // 如果类型不是 string 或 number 类型返回NaN
      return NaN
  }
  // 字符串处理
  str = String(str).trim().split('.')[0]
  let length = str.length;
  if (!length) {
      // 如果为空则返回 NaN
      return NaN
  }

  if (!radix) {
      // 如果 radix 为0 null undefined
      // 则转化为 10
      radix = 10;
  }
  if (typeof radix !== 'number' || radix < 2 || radix > 36) {
      return NaN
  }
  for (let i = 0; i < length; i++) {
      let arr = str.split('').reverse().join('');
      res += Math.floor(arr[i]) * Math.pow(radix, i)
  }
  console.log(res);
  return res;
}

_parseInt('13.7')