// Removing Elements
// 8 Kyu
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr){
  return arr.filter((x,i) => i%2 === 0 )
}