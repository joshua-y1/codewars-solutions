// Name Shuffler
// 8 Kyu
// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

function nameShuffler(str){
  let tempValue = ''
  let arr = str.split(' ')
  tempValue = arr[0]
  arr[0] = arr[1]
  arr[1] = tempValue
  return arr.join(' ')
}