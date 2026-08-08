// Printer Errors
// 7 kyu
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
    // your code
    let arr = s.split('');
    let counter = 0;
    for (let letter of arr){
      if (!alph.includes(letter)){
        counter++
      }
    }
    return `${counter}/${s.length}`;
}

const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m']