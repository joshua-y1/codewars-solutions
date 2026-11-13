// Sum of Minimums!
// 7 Kyu
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
  let sum  = 0
  for (let i of arr) {
    sum += Math.min(...i)
  }
  return sum
}