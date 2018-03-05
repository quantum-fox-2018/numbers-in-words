/*
SET variable bernama bilangan dengan nilai = [[0, ''], [1,'satu '],[2 ,'dua '],[3, 'tiga '], [4,'empat '], [5,'lima '], [6,'enam '],[7, 'tujuh '],
[8,'delapan '],[9, 'sembilan ']]
SET variable bernama bilangan0 dengan nilai = ['puluh ', 'ratus ', 'ribu ', 'juta ' , 'milyar ', 'triliun ']

CREATE fungsi bernama numberToWords dengan parameter number
  IF jumlah panjang string dari number sama dengan 0 maka
    kembalikan string kosong
  ELSE
    DO looping mulai dari 0 sebagai variable i hingga panjang string dari number, setiap iterasi i +1
      DO looping mulai dari 0 sebagai variable j hingga panjang bilangan, setiap iterasi j +1
        IF angka dari string dari number index i sama dengan bilangan j index 0
          SET variable bilangan1 dengan string kosong
          IF number < 10
            SET bilangan1 dengan string kosong
          ELSE IF number >= 10 dan number < 100
            SET bilangan1 jadi bilangan0[0]
          ELSE IF number >= 100 dan number < 1000
            SET bilangan1 jadi bilangan0[1]
          ELSE IF number >= 1000 dan number < 10000
            SET bilangan1 jadi bilangan0[2]
          ELSE IF number >= 10000 dan number < 100000
            SET bilangan1 jadi bilangan0[0]
          ELSE IF number >= 100000 dan number < 1000000
            SET bilangan1 jadi bilangan0[1]
          ELSE IF number >= 1000000 dan number < 10000000
            SET bilangan1 jadi bilangan0[3]

          kembalikan nilai bilangan j index 1 + bilangan1 + fungsi numberToWords dengan
          parameter string dari number yang di ptong index terdepan
*/



var bilangan = [[0, ''], [1,'satu '],[2 ,'dua '],[3, 'tiga '], [4,'empat '], [5,'lima '], [6,'enam '],[7, 'tujuh '],
[8,'delapan '],[9, 'sembilan ']]
var bilangan0 = ['puluh ', 'ratus ', 'ribu ', 'juta ' , 'milyar ', 'triliun ']

function numberToWords(number) {
  // Your code here


  if (String(number).length === 0) {
    return ''
  } else {

    for (var i = 0; i < String(number).length; i++) {

      for (var j = 0; j < bilangan.length; j++) {
        if (Number(String(number)[i]) === bilangan[j][0]) {
          var bilangan1 = ''
          if (number < 10) {
            bilangan1 += ''
          } else if (number >= 10 && number < 100) {
            bilangan1 += bilangan0[0]
          } else if (number >= 100 && number < 1000) {
            bilangan1 += bilangan0[1]
          } else if (number >= 1000 && number < 10000) {
            bilangan1 += bilangan0[2]
          } else if (number >= 10000 && number < 100000) {
            bilangan1 += bilangan0[0]
          } else if (number >= 100000 && number < 1000000) {
            bilangan1 += bilangan0[1]
          } else if (number >= 1000000 && number < 10000000) {
            bilangan1 += bilangan0[3]
          } else if (number >= 10000000) {
            return 'Belum kuat Pak saya'
          }

          if (Number(String(number)[0]) === 0) {
            return '' + numberToWords(String(number).substring(1))
          } else if (Number(String(number)[0]) === 1 && Number(String(number)[1]) === 1 && number >= 10000 && number < 20000) {
            return 'sebelas ribu ' + numberToWords(String(number).substring(2))
          } else if (Number(String(number)[0]) === 1 && number >= 10000 && number < 20000) {
            return bilangan[j+1][1] + 'belas ' + numberToWords(String(number).substring(2))
          } else if (Number(String(number)[0]) === 1 && Number(String(number)[1]) === 1 && number === 11) {
            return 'sebelas' + numberToWords(String(number).substring(2))
          } else if (Number(String(number)[0]) === 1 && number > 11 && number < 20) {
            return bilangan[j+1][1] + 'belas ' + numberToWords(String(number).substring(2))
          }
          return bilangan[j][1] + bilangan1 + numberToWords(String(number).substring(1))
        }
      }
    }
  }
}

// Driver code
console.log(numberToWords(13));
console.log(numberToWords(2));
console.log(numberToWords(25));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(1234567));
console.log(numberToWords(2011845));
console.log(numberToWords(12845));
