// Square Every Digit
// 7 kyu
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    let arr = String(num).split('')
    for (const num in arr){
         arr[num] = Number(arr[num])**2
    }
    return Number(arr.join(''))
}