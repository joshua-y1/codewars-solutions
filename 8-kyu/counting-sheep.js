// Counting Sheep
// 8 Kyu
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(sheep) {
  return sheep.filter(x => x === true).length
}