var wordNum = [
    [1, 'satu'],
    [2, 'dua'],
    [3, 'tiga'],
    [4, 'empat'],
    [5, 'lima'],
    [6, 'enam'],
    [7, 'tujuh'],
    [8, 'delapan'],
    [9, 'sembilan'],
    [10, 'sepuluh'],
    [11, 'sebelas'],
    [12, 'dua belas'],
    [13, 'tiga belas'],
    [14, 'empat belas'],
    [15, 'lima belas'],
    [16, 'enam belas'],
    [17, 'tujuh belas'],
    [18, 'delapan belas'],
    [19, 'sembilan belas']
  ];

console.log(wordNum);
var pecahanKecil = [[2, 'puluh'], [3, 'ratus']];
var pecahanBesar = [[13, 'triliyun'], [10, 'milyar'], [7, 'juta'], [4, 'ribu']];

function numberToWords(number) {
  return ratusan(number);
}

function ratusan(number) {
  var strNum = String(number);
  var firstNum = strNum.charAt(0);
  var result = '';

while (number >= 0) {
  for (let i in wordNum) {
    if (firstNum === wordNum[i][0]) {
      result += wordNum[i][1];
    }
  }

  for (let j in pecahanKecil) {
    if (strNum.length === pecahanKecil[j][0]) {
      number = number - pecahanKecil[j][0];
      result += pecahanKecil[j][0] + ratusan(number);
    }
  }

  return result;
}

}

// Driver code
console.log(numberToWords(4));
//console.log(numberToWords(27));
//console.log(numberToWords(100));
//console.log(numberToWords(999));
