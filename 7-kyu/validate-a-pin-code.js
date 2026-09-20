// Validate a PIN Code
// 7 Kyu
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
  let numbers = ['1','2','3','4','5','6','7','8','9','0']
  if (pin.length !== 4 && pin.length !== 6){
    return false 
  } else {
    let arr = pin.split('')
    for (n of arr){
      if (!numbers.includes(n)){
        return false
      }
    }
    return true
  }
}