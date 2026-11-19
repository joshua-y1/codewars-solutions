// Find the first non-consecutive number
// 8 Kyu
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive (arr) {
  let count = Number(arr[0])
  for (let i of arr){
    if (!(i === count)) {
      return i 
    }
    count++
  }
  return null
}