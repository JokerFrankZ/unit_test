/**
 * @description 选择排序算法
 * @param {Array} arr 传入的数组
 * @return {Array}
 */
const selectSort = (arr, flag = 0) => {
  if (arr === null || arr.length < 2) {
    return arr
  }
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let min = i
    // 找出最小的那个数，j一直保持是数组的第二位
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) min = j
    }
    // 找到后与数组未排序好的第一位互换
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  // 0升序，1倒序
  return flag ? arr.reverse() : arr
}
module.exports = selectSort
