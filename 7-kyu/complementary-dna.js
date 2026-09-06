// Complementary DNA
// 7 Kyu
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript

function dnaStrand(dna){
    let complements = {
        'A': 'T',
        'C': 'G',
        'T': 'A',
        'G': 'C',
    }

    return dna.split('').map(x => complements[x]).join('')
}