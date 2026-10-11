// Small enough? - Beginner
// 7 Kyu
// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit){
  for (i of a) {
    if (!(i <= limit)) {
      return false    
    }
  }
  return true
}