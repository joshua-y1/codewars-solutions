// Count the Digit
// 7 Kyu
// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
  let squares = []
  for (let k = 0; k <= n; k++) {
    squares.push(k ** 2)
  }
  let dCount = 0
  for (i of squares.join('')) {
    if (i == d){
      dCount++
    }
  }
  return dCount
}