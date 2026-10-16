// Cat years, Dog years
// 8 Kyu
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {
  let base = humanYears === 1 ? 15 : 24
  let extra = Math.max(0, humanYears - 2)
  return [humanYears, base + 4 * extra, base + 5 * extra]
}
