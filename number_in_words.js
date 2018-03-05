function numberToWords(number) {
  // Your code here
  // var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  // var string = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas']
  // , 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh', 'seratus'];
  var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var angkaString = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan',
'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  var angkaUjung = [1000000000000, 1000000000, 1000000, 1000, 100, 10];
  var angkaUjungString = ['trilyun', 'milyar', 'juta', 'ribu', 'ratus', 'puluh'];

  if (number < 10) {
    var indexKurangSepuluh = angka.indexOf(number);
    return angkaString[indexKurangSepuluh];
  }

  if (number < 20) {
    var angkaAwal = Math.floor(number / 10);
    var angkaUjung = number % 10;
    return numberToWords(angkaUjung) + ' belas '
  }

  if (number < 100) {
    angkaAwal = Math.floor(number / 10);
    angkaUjung = number % 10;
    return numberToWords(angkaAwal) + ' puluh ' + numberToWords(angkaUjung);
    }

    if (number < 1000) {
      angkaAwal = Math.floor(number / 100);
      angkaUjung = number % 100;
      if (angkaAwal == 1) {
        return 'seratus '
      } else {
      return numberToWords(angkaAwal) + ' ratus ' + numberToWords(angkaUjung);
      }
    }

    if (number < 10000) {
      angkaAwal = Math.floor(number / 1000);
      angkaUjung = number % 1000;
      return numberToWords(angkaAwal) + ' ribu ' + numberToWords(angkaUjung);
    }

    if (number < 100000) {
      angkaAwal = Math.floor(number / 10000);
      angkaUjung = number % 10000;
      return numberToWords(angkaAwal) + ' puluh ' + numberToWords(angkaUjung)
    }

    if (number < 1000000) {
      angkaAwal = Math.floor(number / 100000);
      angkaUjung = number % 100000;
      return numberToWords(angkaAwal) + ' ratus ribu ' + numberToWords(angkaUjung)
    }

    if (number < 10000000) {
      angkaAwal = Math.floor(number / 1000000);
      angkaUjung = number % 1000000;
      if (angkaAwal == 1) {
        return numberToWords(angkaAwal) + ' juta seratus ribu'
      }
      return numberToWords(angkaAwal) + ' juta ' + numberToWords(angkaUjung);
    }
  }

// Driver code
console.log(numberToWords(4)); // empat
console.log(numberToWords(15))
console.log(numberToWords(100))
console.log(numberToWords(94))
console.log(numberToWords(705));
console.log(numberToWords(7534));
console.log(numberToWords(95624))
console.log(numberToWords(674839))
console.log(numberToWords(1100000));
// console.log(numberToWords(2011845));
