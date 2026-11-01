// Grasshopper - Terminal game combat function
// 8 Kyu
// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

function combat(health, damage) {
  return Math.max(0, health - damage)
}