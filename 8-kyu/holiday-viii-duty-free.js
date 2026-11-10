// Holiday VIII - Duty Free
// 8 Kyu
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

function dutyFree(normPrice, discount, hol){
  let discountedPrice = normPrice * (discount/100)
  let numBottle = Math.floor(hol / discountedPrice)
  return numBottle
}