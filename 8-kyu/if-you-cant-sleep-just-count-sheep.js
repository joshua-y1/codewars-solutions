// If you can't sleep, just count sheep!! 
// 8 Kyu
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
  let i = 1
  let answer = ''
  while (i <= num) {
    answer = answer + `${i} sheep...`
    i++
  } 
  return answer
}