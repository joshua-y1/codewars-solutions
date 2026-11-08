// Alternate Capitalization
// 7 Kyu
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

function capitalize(s){
  let evenStr = s.split('').map((x, i) => i%2 === 0 ? x.toUpperCase() : x).join('')
  let oddStr = s.split('').map((x, i) => i%2 === 1 ? x.toUpperCase() : x).join('')
  return [evenStr, oddStr]
}