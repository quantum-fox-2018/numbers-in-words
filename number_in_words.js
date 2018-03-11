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
    var digitDepan = Math.floor(number / 10)
    var digitBelakang = number % 10
      if (digitDepan === 1) {
        return 'Sepuluh'
      }
    return numberToWords(digitDepan) +' Puluh '+ numberToWords(digitBelakang)
  }else if (number > 11 && number < 20) {
    var digitBelakang = number % 10
    return numberToWords(digitBelakang) + ' Belas '
  }else if (number >= 100 && number < 1000) {
    var digitDepan = Math.floor(number / 100)
    var digitBelakang = number % 100
    if (digitDepan === 1) {
      return 'Seratus ' + numberToWords(digitBelakang)
    }
    return numberToWords(digitDepan) +' Ratus '+ numberToWords(digitBelakang)
  }else if (number > 1000 && number < 100000) {
    var digitDepan = Math.floor(number / 1000)
    var digitBelakang = number % 1000
    if (digitDepan === 1) {
      return 'Seribu ' + numberToWords(digitBelakang)
    }
    return numberToWords(digitDepan) +' Ribu '+ numberToWords(digitBelakang)
  }else if (number > 100000 && number < 1000000) {
    var digitDepan = Math.floor(number / 100000)
    var digitBelakang = number % 100000
    if (digitDepan === 1) {
      return 'Seratus Ribu ' + numberToWords(digitBelakang)
    }
    return numberToWords(digitDepan) +' Seratus Ribu '+ numberToWords(digitBelakang)
  }else if (number >= 1000000 && number < 1000000000) {
    var digitDepan = Math.floor(number / 1000000)
    var digitBelakang = number % 1000000
    return numberToWords(digitDepan) +' Juta '+ numberToWords(digitBelakang)
  }else if (number >= 1000000000 && number < 1000000000000) {
    var digitDepan = Math.floor(number / 1000000000)
    var digitBelakang = number % 1000000000
    return numberToWords(digitDepan) +' Milyar '+ numberToWords(digitBelakang)
  }else if (number >= 1000000000000 && number < 1000000000000000) {
    var digitDepan = Math.floor(number / 1000000000000)
    var digitBelakang = number % 1000000000000
    return numberToWords(digitDepan) +' Triliyun '+ numberToWords(digitBelakang)
  }else if (number >= 1000000000000000) {
    return 'out of range'
  }
}
// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(10000000));
