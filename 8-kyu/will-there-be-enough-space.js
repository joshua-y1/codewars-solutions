// Will there be enough space?
// 8 Kyu 
// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

function enough(cap, on, wait) {
  let remaining = cap - (on + wait)
  return remaining >= 0 ? 0 : Math.abs(remaining)
}