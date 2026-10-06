// Square(n) Sum
// 8 Kyu
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers){
  return numbers.length ? numbers.reduce((acc, num) => acc + (num**2), 0) : 0
}