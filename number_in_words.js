function numberToWords(number) {
  // Your code here
  var result = ''
  var numberArr = [9,8,7,6,5,4,3,2,1,0]
  var word = ['Sembilan', 'Delapan', 'Tujuh', 'Enam', 'Lima', 'Empat', 'Tiga', 'Dua', 'Satu', '']

  if (number <= 10 ) {
  for (var i = 0; i < numberArr.length; i++) {
    
      while (number - numberArr[i] === 0) {

        return word[i]   
      }
    }
  }

  if (number >= 10 && number < 100) {

    var angkaDepan = Math.floor(number / 10)
    var angkaBelakang = number % 10
      if (angkaDepan === 1) {

        return 'Sepuluh'
      }
    return numberToWords(angkaDepan) +' Puluh '+ numberToWords(angkaBelakang)
  }// end of angka puluhan

  if (number > 11 && number < 20) {

    var angkaBelakang = number % 10
    return numberToWords(angkaBelakang) + ' Belas '
  }// end of angka belasan

  if (number >= 100 && number < 1000) {

    var angkaDepan = Math.floor(number / 100)
    var angkaBelakang = number % 100
    if (angkaDepan === 1) {

      return 'Seratus ' + numberToWords(angkaBelakang)
    }
    return numberToWords(angkaDepan) +' Ratus '+ numberToWords(angkaBelakang)
  }// end of angka ratusan

  if (number > 1000 && number < 100000) {

    var angkaDepan = Math.floor(number / 1000)
    var angkaBelakang = number % 1000
    if (angkaDepan === 1) {

      return 'Seribu ' + numberToWords(angkaBelakang)
    }
    return numberToWords(angkaDepan) +' Ribu '+ numberToWords(angkaBelakang)
  }// end of angka ribuan

  if (number > 100000 && number < 1000000) {

    var angkaDepan = Math.floor(number / 100000)
    var angkaBelakang = number % 100000
    if (angkaDepan === 1) {

      return 'Seratus Ribu ' + numberToWords(angkaBelakang)
    }
    return numberToWords(angkaDepan) +' Seratus Ribu '+ numberToWords(angkaBelakang)
  }// end of angka ratusan ratusan

  if (number >= 1000000 && number < 1000000000) {

    var angkaDepan = Math.floor(number / 1000000)
    var angkaBelakang = number % 1000000
    
    return numberToWords(angkaDepan) +' Juta '+ numberToWords(angkaBelakang)
  }// end of angka jutaan

  if (number >= 1000000000 && number < 1000000000000) {

    var angkaDepan = Math.floor(number / 1000000000)
    var angkaBelakang = number % 1000000000
    
    return numberToWords(angkaDepan) +' Milyar '+ numberToWords(angkaBelakang)
  }// end of angka Milyar

  if (number >= 1000000000000 && number < 1000000000000000) {

    var angkaDepan = Math.floor(number / 1000000000000)
    var angkaBelakang = number % 1000000000000
    
    return numberToWords(angkaDepan) +' Triliyun '+ numberToWords(angkaBelakang)
  }// end of angka Triliyun

  if (number >= 1000000000000000) {

    return 'Mohon bersabar ini ujian'
  }
  
}

// Driver code
console.log(numberToWords(0));
console.log(numberToWords(110))
console.log(numberToWords(10))
console.log(numberToWords(20))
console.log(numberToWords(100001))
console.log(numberToWords(705));
console.log(numberToWords(7050));
console.log(numberToWords(1000000000000000));
console.log(numberToWords(2011845));
