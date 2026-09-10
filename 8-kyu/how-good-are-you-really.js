// How Good Are You Really?
// 8 Kyu
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
  let avgClassPoints =  classPoints.reduce((acc,num) => acc + num) / classPoints.length;
  return yourPoints > avgClassPoints;
}
