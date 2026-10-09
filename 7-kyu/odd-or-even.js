// Odd or Even?
// 7 Kyu
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(array) {
  return array.reduce((acc, num) => acc + num, 0) % 2 === 0 ? "even" : "odd"
}