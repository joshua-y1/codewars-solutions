// Hello, Name or World!
// 8 Kyu
// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

function hello(name) {
  return name ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!` : `Hello, World!`
}