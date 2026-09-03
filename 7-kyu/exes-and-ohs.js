// Exes and Ohs
// 7 Kyu
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
    //code here
    let arr = str.split('');
    let x = arr.filter(x => x.toLowerCase() === 'x');
    let o = arr.filter(o => o.toLowerCase() === 'o');
    
    return x.length === o.length;
}