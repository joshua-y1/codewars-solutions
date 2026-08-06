// Transportation on Vacation
// 8 kyu
// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

function rentalCarCost(d) {
  return d >= 7 ? 40*d-50 : d >= 3 ? 40*d-20 : 40*d
}
