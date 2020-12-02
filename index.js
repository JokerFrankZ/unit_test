let insertSort = require('./src/insertSort')
let input = [2, 4, 6, 8, 5, 7, 9, 0, 1, 3].sort(() =>
  Math.random() > 0.5 ? 1 : -1
)
console.log(insertSort(input))
