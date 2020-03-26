/*
 * @Author: your name
 * @Date: 2020-03-26 16:28:01
 * @LastEditTime: 2020-03-26 22:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /basicCode/arithmetic/binaryTree/binarySearch.js
 */
function binarySearch(arr, value) {
  if (arr.length === 0) return -1;
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var medIndex = low + ((high - low) >> 1);
    if (value > arr[medIndex]) {
      low = medIndex + 1;
    } else if (value < arr[medIndex]) {
      high = medIndex - 1;
    } else if (value === arr[medIndex]) {
      return medIndex;
    } else {
      return -1;
    }
  }
  return -1;
}

console.log(binarySearch([1], 1))