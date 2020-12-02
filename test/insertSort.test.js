const insertSort = require('../src/insertSort')
describe('插入排序算法', () => {
  let input = [2, 4, 6, 8, 5, 7, 9, 0, 1, 3].sort(() =>
    Math.random() > 0.5 ? 1 : -1
  )
  let output = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  test('升序', () => {
    expect(insertSort(input)).toEqual(output)
  })
  test('降序', () => {
    expect(insertSort(input, 1)).toEqual(output.reverse())
  })
  test('参数为null时', () => {
    expect(insertSort(null)).toEqual(null)
  })
  test('参数为空数组', () => {
    expect(insertSort([])).toEqual([])
  })
  test('参数不足2个时', () => {
    expect(insertSort([1])).toEqual([1])
  })
})
