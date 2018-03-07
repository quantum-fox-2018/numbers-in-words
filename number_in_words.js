var wordNum = [
    [1000, 'seribu'],
    [100, 'seratus'],
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

var pecahanKecil = [[2, 10, 'puluh'], [3, 100, 'ratus']];
var pecahanBesar = [
    [13, 1000000000000, 'triliyun'],
    [10, 1000000000, 'milyar'],
    [7, 1000000, 'juta'],
    [4, 1000, 'ribu']
  ];

function numberToWords(number) {
  var strNum = String(number);
  var firstNum = Number(strNum.charAt(0));
  var potongBack, potongFront, tampung;

  if (number === 0) {
    return '';
  } else if (number < 1000 ) {
    return numberRatusan(number);
  } else if (number === 1000) {
    return wordNum[0][1];
  } else {
    for (let i in pecahanBesar) {
      if (strNum.length >= pecahanBesar[i][0]) {
        potongBack = strNum.length % 3;
        if (strNum.length % 3 === 0) {
          potongBack = 3;
        }
        var potong = Number(String(number).slice(0, potongBack));
        tampung = numberRatusan(potong);
        number -= potong * (pecahanBesar[i][1]);
        if (tampung) {
          return tampung + ' ' + pecahanBesar[i][2] + ' ' + numberToWords(number);
        }
      }
    }
  }

}

function numberRatusan(number) {
  var strNum = String(number);
  var firstNum = Number(strNum.charAt(0));
  var result = '';

  if (number === 0) {
    return '';
  }

  if (number < 20) {
    for (let i in wordNum) {
      if (number === wordNum[i][0]) {
        number -= 0;
        return wordNum[i][1];
      }
    }
  } else if (number === 100) {
      return wordNum[1][1];
  } else {
    for (let i in wordNum) {
      if (firstNum === wordNum[i][0]) {
        result += wordNum[i][1];
      }
    }

    for (let j in pecahanKecil) {
      if (strNum.length === pecahanKecil[j][0]) {
        number -= firstNum * pecahanKecil[j][1];
        return result + ' ' + pecahanKecil[j][2] + ' ' + numberRatusan(number);
      }
    }
  }
}

// Driver code
console.log(numberToWords(9990000000000));
/*
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(999));
console.log(numberToWords(38079));
console.log(numberToWords(100000)); //seratus ribu
console.log(numberToWords(1000000)); //satu juta
console.log(numberToWords(10000000)); //sepuluh juta
console.log(numberToWords(100000000)); //seratus juta
*/
