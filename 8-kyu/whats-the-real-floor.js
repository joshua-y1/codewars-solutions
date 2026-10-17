// What's the real floor?
// 8 Kyu
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
  let value = 0
  if (n <= 0) {
    value = n
  } else if (n < 13) {
    value = n - 1
  } else {
    value = n -2
  }
  return value
}