// Take a Ten Minutes Walk
// 6 Kyu
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

let isValidWalk = (walk) => {
    let x = 0;
    let y = 0;
    
    if (walk.length === 10){
        for (direction of walk) {
            switch(direction) {
                case 'n': y++; break
                case 's': y--; break
                case 'e': x++; break
                case 'w': x--; break
            }    
        }
        return x===0 && y===0
    } else {
        return false
    }
}