// Replace With Alphabet Position
// 6 kyu
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(char => char >= 'a' && char <= 'z')
    .map(char => char.charCodeAt(0) - 96)
    .join(' ');
}