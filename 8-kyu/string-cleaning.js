// String cleaning
// 8 Kyu
// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

function stringClean(s){
  return s.split('').filter(x => !/\d/.test(x)).join('')
}