// Beginner Series #3 Sum of Numbers
// 7 kyu
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b)
{
   //Good luck!
  let arr = []
  const min = Math.min(a,b)
  const max = Math.max(a,b)
  
  for (let i=min; i<=max; i++){
    arr.push(i)
  }
  return arr.reduce((acc, num) => acc + num)
}

