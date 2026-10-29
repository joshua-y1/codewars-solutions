// Simple Fun #176: Reverse Letter
// 7 Kyu
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

function reverseLetter(str) {
  //coding and coding..
  let newArr = []
  for (let i of str.split('')){
    if (/[a-z]/i.test(i) ) {
      newArr.unshift(i)
    }
    else {
      continue
    }
  }
  return newArr.join('')
}