const insertSort = (arr, flag = 0) => {
  if (arr === null || arr.length < 2) {
    return arr
  }
  // 默认第一项已经拍好序了，所以从数组的第二项开始循环
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i] // 当前要插入的项
    let preIndex = i - 1 // 前面项的索引
    // 把当前要插入的项逐个和前面已排好序的做对比，当前面项大于当前插入项时，前面项向右移动一位
    while (preIndex >= 0 && arr[preIndex] > cur) {
      // 将前面项向右移动一位
      arr[preIndex + 1] = arr[preIndex]
      // 将前面项的索引向左移
      preIndex--
    }
    // 将待插入的项插入到，之前前面项的地方
    arr[preIndex + 1] = cur
  }
  return flag ? arr.reverse() : arr
}
module.exports = insertSort
