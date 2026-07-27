// Isograms
// 7 kyu
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
    str = str.toLowerCase()
    let unique = []

    for (let i=0; i<str.length; i++){
        if(unique.includes(str[i])){
            return false
        }
        unique.push(str[i])
    }
    return true
}
