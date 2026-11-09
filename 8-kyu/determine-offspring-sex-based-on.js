// Determine offspring sex based on genes XX and XY chromosomes
// 8 Kyu
// https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript

function chromosomeCheck(sperm) {
   let gender = ''
   if (sperm[1] === 'X') {
     gender = 'daughter'
   } else {
     gender = 'son'
   }
   return `Congratulations! You're going to have a ${gender}.`
  
}