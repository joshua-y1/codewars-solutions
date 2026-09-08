// Persistent Bugger.
// 6 Kyu
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let result = num
  let count = 0
  while (result >= 10){
    let product = 1
    for (const n of result.toString().split('')){
      product *= n
    }
    result = product
    count++
  }
  return count
}