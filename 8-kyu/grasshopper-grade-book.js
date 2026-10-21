// Grasshopper - Grade book
// 8 Kyu
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3
  let grade = ''
  if (avg < 60) {
    grade = 'F'
  } else if (avg < 70) {
    grade = 'D'
  } else if (avg < 80) {
    grade = 'C'
  } else if (avg < 90) {
    grade = 'B'
  } else {
    grade = 'A'
  }
  return grade
}