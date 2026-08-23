// Break CamelCase
// 6 kyu
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  let result = [];
  for (let char of string){
    if (char === char.toUpperCase()){
      // we need to add a space before this character
      result.push(' ')
    }
    result.push(char); 
  }
  return result.join('');
}