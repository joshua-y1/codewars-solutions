// Find the Unique Number
// 6 Kyu
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  let counts = {};

  for (num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  
  return Number(Object.keys(counts).find(key => counts[key] === 1));
}