// Double Char
// 8 kyu
// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

function doubleChar(str) {
  let arr = str.split('')
  return arr.map(x => x.repeat(2)).join('')
}
