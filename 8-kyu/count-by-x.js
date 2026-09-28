// Count by X
// 8 Kyu
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
  let arr = []
  for (let i=1; i<=n; i++){
    arr.push(x*i)
  }
  return arr
}