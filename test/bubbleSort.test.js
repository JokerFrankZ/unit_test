const bubbleSort = require('../src/bubbleSort')
describe('冒泡排序测试', () => {
  let input = [2, 4, 6, 8, 5, 7, 9, 0, 1, 3].sort(() =>
    Math.random() > 0.5 ? 1 : -1
  )
  let output = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  test('正序', () => {
    expect(bubbleSort(input)).toEqual(output)
  })
  test('倒序', () => {
    expect(bubbleSort(input, 1)).toEqual(output.reverse())
  })
  test('空数组', () => {
    expect(bubbleSort([])).toEqual([])
  })
  test('传入参数为null', () => {
    expect(bubbleSort(null)).toEqual(null)
  })
  test('不足2个元素', () => {
    expect(bubbleSort([1])).toEqual([1])
  })
})
