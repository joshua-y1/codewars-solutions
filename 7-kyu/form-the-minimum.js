// Form the Minimum
// 7 Kyu
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

function minValue(values){
  let arr = []
  for (let i of values) {
    if (!arr.includes(i)) {
      arr.push(i)
    }
  }
  return Number(arr.sort().join(''))
}