// Beginner - Reduce But Grow
// 8 Kyu
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x){
  return x.reduce((acc, num) => acc * num)
}