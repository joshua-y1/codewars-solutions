// Highest Scoring Word
// 6 Kyu
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  let best = '';
  let bestScore = 0;
  for (const word of x.split(' ')) {
    let score = 0;
    for (const ch of word) {
      score += ch.charCodeAt(0) - 96;
    }
    if (score > bestScore) {
      bestScore = score;
      best = word;
    }
  }
  return best;
}