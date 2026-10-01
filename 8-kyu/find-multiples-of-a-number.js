// Find Multiples of a Number
// 8 Kyu
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
  let arr = []
  for (let i=integer; i<=limit; i+=integer){
    arr.push(i)
  }
  return arr
  
}
