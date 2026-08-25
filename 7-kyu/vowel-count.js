// Vowel Count
// 7 Kyu
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(x => vowels.includes(x)).length;
}