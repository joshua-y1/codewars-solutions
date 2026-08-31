// Mumbling
// 7 kyu
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  return s.split('').map((char, i) => 
      char.toUpperCase() + char.toLowerCase().repeat(i)
  ).join('-');
}