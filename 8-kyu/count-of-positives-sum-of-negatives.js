// Count of positives / sum of negatives
// 8 Kyu
// codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return []
  let countPos = 0
  let sumNeg = 0
  for (let i of input) {
    if (i > 0) {
      countPos += 1
    } else if (i < 0) {
      sumNeg += i
    }
  }
  return [countPos, sumNeg]
}
