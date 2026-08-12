// Sum of the nth term of Series
// 7 kyu
// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n) {
  let result = 0;
  for (let i=0; i<n; i++){
    result = result + 1/(1 + 3*i);
  }
  return result.toFixed(2);
}