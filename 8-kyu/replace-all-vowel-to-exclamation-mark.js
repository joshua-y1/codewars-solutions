// Exclamation marks series #11: Replace all vowel to exclamation marks in the sentence
// 8 Kyu
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript

function replace(s) {
  //coding and coding....
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let arr = s.split('')
  for (let i=0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr[i] = '!'
    }
  }
  return arr.join('');
}