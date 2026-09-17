// Difference of Volumes of Cuboids
// 8 Kyu
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

function findDifference(a, b) {
  a = a.reduce((acc, num) => acc * num)
  b = b.reduce((acc, num) => acc * num)
  return Math.abs(a-b)
}