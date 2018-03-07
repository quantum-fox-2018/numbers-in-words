function numberToWords(number) {
  // Your code here
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
      [11, 'sebelas']
    ];

  var digitTerbilang = [
      [13, 'triliyun'],
      [10, 'milyar'],
      [7, 'juta']
    ];

  var numberLength = String(number).length;
  var potong, ribuan, hasil = [];

  for (let i = 0; i < digitTerbilang.length; i++) {
    if (numberLength >= digitTerbilang[i][0]) {
      potong = numberLength % 3;

      var tampung = numberRibuan(Number(String(number).slice(0, potong-1)));
      if (tampung) {
        return tampung + ' ' + digitTerbilang[i][0];
      }
    }
  }

  return (numberRibuan(number));
}

function numberRibuan(number) {
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
      [11, 'sebelas']
    ];

  var firstNum;

  if (number === 0) {
    return '';
  } else {
    // RATUSAN
    if (number >= 100) {
      firstNum = Number(String(number).charAt(0));
      if (firstNum === 1) {
        number -= 100;
        return ' seratus' + numberRibuan(number);
      } else {
        for (let i = 0; i < wordNum.length; i++) {
          if (wordNum[i][0] === firstNum) {
            number -= firstNum * 100;
            return ' ' + wordNum[i][1] + ' ratus' + numberRibuan(number);
          }
        }
      }
    }

    // PULUHAN (12-99)
    if (number > 10) {
      if (number < 20 && number > 11) {
        firstNum = Number(String(number).charAt(1));
        for (let i = 0; i < wordNum.length; i++) {
          if (wordNum[i][0] === firstNum) {
            number -= firstNum + 10;
            return ' ' + wordNum[i][1] + 'belas' + numberRibuan(number);
          }
        }
      } else {
        firstNum = Number(String(number).charAt(0));
        for (let i = 0; i < wordNum.length; i++) {
          if (wordNum[i][0] === firstNum) {
            number -= firstNum * 10;
            return ' ' + wordNum[i][1] + ' puluh' + numberRibuan(number);
          }
        }
      }
    }

    // SATUAN (1-11)
    if (number <= 11) {
      for (let i = 0; i < wordNum.length; i++) {
        if (wordNum[i][0] === number) {
          number = 0;
          return ' ' + wordNum[i][1] + numberRibuan(number);
        }
      }
    }
  }

}

// Driver code
//console.log(numberToWords(4));
//console.log(numberToWords(27));
//console.log(numberToWords(705));
//console.log(numberToWords(9999));
console.log(numberToWords(10000));
//console.log(numberToWords(2011845));
