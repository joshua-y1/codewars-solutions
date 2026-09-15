// Grasshopper - Summation
// 8 Kyu
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
  let arr = []
  for (let i=1; i<=num; i++){
    arr.push(i)  
  }
  return arr.reduce((acc,num) => acc + num)
}