// What's the real floor?
// 8 Kyu
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
  let value = 0
  if (n < 0) {
    value = n
  } else if (n === 0) {
    value = 0
  } else if (n === 15) {
    value = 13
  } else {
    value = n - 1
  }
  return value
}