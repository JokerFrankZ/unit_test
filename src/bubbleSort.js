/**
 * @description 冒泡排序算法
 * @param {Array} arr 传入的数组
 * @param {Number} flag 0为升序，1为降序
 * @return {Array}
 */
const bubbleSort = (arr, flag = 0) => {
  if (arr === null || arr.length < 2) {
    return arr
  }
  let len = arr.length - 1
  let lastPosition = 0 // 最后交换的位置
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = true
    // 每跑一次这个循环，就排好一个数
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        // 前后交换位置
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        // 交换了标示更改
        flag = false
        // 更新最后交换的位置
        lastPosition = j
      }
    }
    //将记录好的位置给循环次数，避免继续循环已经排好的数字
    len = lastPosition
    // 判断是否有交换过位置，没有说明已经排好序了
    if (flag) {
      break
    }
  }
  // 控制升序降序
  return flag ? arr.reverse() : arr
}
module.exports = bubbleSort
