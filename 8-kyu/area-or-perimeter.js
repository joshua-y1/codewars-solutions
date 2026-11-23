// Area or Perimeter
// 8 Kyu
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/solutions/javascript

const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : (2*l)+(2*w)
};