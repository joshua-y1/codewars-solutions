// Remove duplicates from list
// 8 Kyu
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

function distinct(a) {
  let newArr = []
  a.forEach(x => {
    if (!newArr.includes(x)){
      newArr.push(x)      
    }
  })
  return newArr;
}