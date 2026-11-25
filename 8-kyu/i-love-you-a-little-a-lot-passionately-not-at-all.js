// I love you, a little, a lot, passionately... not at all
// 8 Kyu
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
  let message
  switch (nbPetals%6) {
      case 1:
        message = "I love you"
        break
      case 2:
        message = "a little"
        break
      case 3:
        message = "a lot"
        break
      case 4:
        message = "passionately"
        break
      case 5:
        message = "madly"
        break
      case 0:
        message = "not at all"
        break
  }
  return message
}
