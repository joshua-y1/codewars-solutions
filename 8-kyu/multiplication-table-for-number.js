// Multiplication table for number
// 8 Kyu
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

function multiTable(number) {
  const lines = []
  for (let i = 1; i <= 10; i++) {
    lines.push(`${i} * ${number} = ${i * number}`)
  }
  return lines.join('\n')
}