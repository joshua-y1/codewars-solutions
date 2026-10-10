// Find the capitals
// 7 Kyu
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

var capitals = function (word) {
  let arr = word.split('')
  let indices = []
  arr.forEach((x, i) => {
    if (x === x.toUpperCase()) {
      indices.push(i)
    }
  })
  return indices
};