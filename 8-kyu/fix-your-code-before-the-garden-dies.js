// Fix your code before the garden dies!
// 8 Kyu
// https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript

function rainAmount(mm){
    return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!"
}