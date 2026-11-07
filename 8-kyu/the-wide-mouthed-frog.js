// The Wide-Mouthed frog!
// 8 Kyu
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript

function mouthSize(animal) {
  let answer = ''
  if (animal.toLowerCase() === 'alligator') {
    answer = "small"
  } else {
    answer = "wide"
  }
  return answer
}