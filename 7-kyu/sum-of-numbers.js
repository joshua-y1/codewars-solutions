// Beginner Series #3 Sum of Numbers
// 7 kyu
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b)
{
   //Good luck!
  let arr = []
  if (a === b){
    return a
  } else if (Math.abs(a-b) === 1){
    return a + b
  } else {
    for (i=a; i<=b; i++){
      arr.push(i)
    }
    return arr.reduce((acc, num) => acc + num)
  }
}

