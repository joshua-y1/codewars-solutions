// Grasshopper - Array Mean 
// 8 Kyu
// https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript

function findAverage(nums) {
  return nums.reduce((acc, num) => num + acc) / nums.length
}