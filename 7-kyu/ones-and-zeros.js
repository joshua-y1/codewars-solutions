// Ones and Zeros
// 7 Kyu
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => {
  let sum = 0
  arr = arr.reverse()
  for (let i=0; i<arr.length; i++){
    if (arr[i] === 1) {
      sum+=2**i
    }
  }
  return sum;
};