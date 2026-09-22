// Well of Ideas - Easy Version
// 8 Kyu
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
  let countG = 0
  for (idea of x){
    if (idea === 'good'){
      countG += 1
    }
  }
  if (countG === 1 || countG === 2){
    return 'Publish!'
  } else if (countG > 2) {
    return 'I smell a series!'
  } else {
    return 'Fail!'
  }
}