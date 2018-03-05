function numberToWords(number) {
  // Your code here
  var angkaString = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var sisaPuluh = number % 10;
  var angkaSatuan = '';

  if (number < 10) {
    for (var i = 0; i < angka.length; i++) {
      if (number < 1) {
        return angkaSatuan;
      }
      if (number <= angka[i]) {
        angkaSatuan = angkaString[i];
        return angkaSatuan + numberToWords(number - angka[i]);
      }
    }
  }

  if (number > 9 && number < 20) {
    if (number == 10) {
      return 'sepuluh';
    }
    if (number == 11) {
      return 'sebelas';
    } else {
      return numberToWords(sisaPuluh) + ' belas';
    }
  }

  if (number > 19 && number < 100) {
    var puluhan = Math.floor(number / 10);
    return numberToWords(puluhan) + ' puluh ' + numberToWords(sisaPuluh);
  }

  if (number > 99 && number < 1000) {
    var ratusan = Math.floor(number / 100);
    var sisaRatus = number % 100;
    if (ratusan == 1) {
      return 'seratus ' + numberToWords(sisaRatus);
    } else {
      return numberToWords(ratusan) + ' ratus ' + numberToWords(sisaRatus);
    }
  }

  if (number > 999 && number < 1000000) {
    var ribuan = Math.floor(number / 1000);
    var sisaRibu = number % 1000;
    if (ribuan == 1) {
      return 'seribu ' + numberToWords(sisaRibu);
    } else {
      return numberToWords(ribuan) + ' ribu ' + numberToWords(sisaRibu);
    }
  }

  if (number > 999999 && number < 1000000000) {
    var jutaan = Math.floor(number / 1000000);
    var sisaJuta = number % 1000000;
    return numberToWords(jutaan) + ' juta ' + numberToWords(sisaJuta);
  }

  if(number > 999999999 && number < 1000000000000) {
    var milyar = Math.floor(number/1000000000);
    var sisaMilyar = number % 1000000000;
    return numberToWords(milyar) + ' miliyar ' + numberToWords(sisaMilyar);
  }

  if(number > 999999999999 && number < 1000000000000000) {
    var trilyun = Math.floor(number/1000000000000);
    var sisaTrilyun = number % 1000000000000;
    return numberToWords(trilyun) + ' triliun ' + numberToWords(sisaTrilyun);
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000000));
console.log(numberToWords(2011845));
