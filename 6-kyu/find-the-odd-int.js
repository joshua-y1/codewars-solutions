// Find the Odd Int
// 6 Kyu
// https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript

function findOdd(A) {
  // Empty Object   
  let counts = {};
  
  // Make Hash  
  for (let num of A){
    if (num in counts){
      counts[num] = counts[num] + 1
    } else {
      counts[num] = 1
    }
  }
  
  // Now we check count
  for (let key in counts){
    if (counts[key]%2 !== 0){
      return Number(key)
    }
  }
  
}