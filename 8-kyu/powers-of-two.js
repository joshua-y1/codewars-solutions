// Powers of 2
// 8 kyu
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n){
  let counter = 0;
  let arr = [];
  while (counter <= n){
    arr.push(2 ** counter);
    counter++;
  }
  return arr;
}