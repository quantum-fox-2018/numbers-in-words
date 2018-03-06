function in_words(num) {
  var angka = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  var huruf = ['sembilan', 'delapan', 'tujuh', 'enam', 'lima', 'empat', 'tiga', 'dua', 'satu'];

  if (num < 10) {
    for (var i = 0; i < angka.length; i++) {
      var hasil = '';
      if (num < 1) {
        return hasil;
      }
      if (num >= angka[i]) {
        hasil = huruf[i];
        return hasil + in_words(num - angka[i]);
      }
    }
  }

  if (num > 9 && num < 20) {
    if (num === 10) {
      return "sepuluh";
    }
    if (num === 11) {
      return "sebelas";
    }
    var angkaDepan = Math.floor(num / 10);
    var angkaBelakang = num % 10;
    return in_words(angkaBelakang) + " belas ";
  }

  if (num > 19 && num < 100) {
    angkaDepan = Math.floor(num / 10);
    angkaBelakang = num % 10;
    return in_words(angkaDepan) + " puluh " + in_words(angkaBelakang);
  }

  if (num > 99 && num < 200) {
    angkaBelakang = num % 100;
    return "seratus " + in_words(angkaBelakang);
  }

  if (num > 199 && num < 1000) {
    var ratusan = Math.floor(num / 100);
    angkaBelakang = num % 100;;
    return in_words(ratusan) + " ratus " + in_words(angkaBelakang);
  }

  if (num > 999 && num < 2000) {
    angkaBelakang = num % 1000;
    return "seribu " + in_words(angkaBelakang)
  }

  if(num > 1999 && num < 10000){
    var ribuan = Math.floor(num / 1000);
    angkaBelakang = num % 1000;
    return in_words(ribuan) + " ribu " + in_words(angkaBelakang)
  }

  if(num > 9999 && num < 100000){
    var ribuan = Math.floor(num / 1000);
    angkaBelakang = num % 1000;
    return in_words(ribuan) + " ribu " + in_words(angkaBelakang)
  }

if(num > 99999 && num < 1000000){
  var ratusribu = Math.floor(num / 1000);
  angkaBelakang = num % 10000;
  return in_words(ratusribu) + " ribu " + in_words(angkaBelakang)
}

if(num > 1000000){
  var juta = Math.floor(num / 100000);
  angkaBelakang = num % 100000
  return in_words(juta) + " juta " + in_words(angkaBelakang)
}

}

// Driver code
console.log(in_words(705));
console.log(in_words(1000000));
console.log(in_words(2011845));
