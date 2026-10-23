// Remove First and Last Character
// 8 Kyu
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str){
  str = str.split('')
  str.shift()
  str.pop()
  return str.join('')
};



