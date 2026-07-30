// Reverse Words
// 7 kyu
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript

function reverseWords(str) {
  // Go for it
  let arr = str.split(' ')
  arr = arr.map(x => x.split('').reverse().join(''))
  return arr.join(' ')
}