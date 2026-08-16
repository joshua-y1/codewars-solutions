// Counting Duplicates
// 6 Kyu
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
  //...
  let counts = {}
  const chars = text.toLowerCase().split('');
  
  for (char of chars){
    counts[char] = (counts[char] || 0) + 1;
  }
  
  return Object.values(counts).filter(c => c > 1).length;
}