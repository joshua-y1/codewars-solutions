// Isograms
// 7 kyu
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
  let count = {}
  for (i of str.toLowerCase().split('')){
    count[i] = (count[i] || 0) + 1
    if (count[i] > 1){
      return false
    }
  }
  return true
}