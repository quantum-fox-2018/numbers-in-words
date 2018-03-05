function numberToWords(number) {
  // Your code here

  let words = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh']
  let belas = [' belas ']
  let puluh = [' puluh ']
  let ratus = [' ratus ', ' puluh ']
  let count = 0
  let result = ''

  if (number == 10) {

    return 'sepuluh'

  }

  if (String(number).length  == 1) {
    return words[number]
  }

  if (String(number).length == 2) {

    if (String(number)[0] == 1 && String(number)[1] == 1) {

      result = 'sebelas'

    } else if (String(number)[0] == 1) {

      result += words[String(number)[1]] + belas

    } else {

      for (var i = 0; i < String(number).length; i++) {

        if (i == String(number).length-1) {

          result += words[+(String(number)[i])]

          break

        }

        result += words[+(String(number)[i])] +puluh[count]

      }

    }

  }

  if (String(number).length == 3) {

    if (String(number)[0] == 1 && String(number)[1] == 0) {

      return 'seratus ' + words[+(String(number)[String(number).length-1])]

    }

    if (String(number)[1] == 0) {

      for (var i = 0; i < String(number).length; i++) {

        if (i == String(number).length-1) {

          result += words[+(String(number)[i])]
          break

        } else if ( String(number)[i] !== '0' ) {

          result += words[+(String(number)[i])] +ratus[count]

        }else {
          result += ''
        }

        count++

      }

      return result

    }

    if (String(number)[0] == 1) {

      number = +(String(number).slice(1))

      return 'seratus ' + numberToWords(number)

    } else if (String(number).length == 3) {

      let angkaDepan = words[+(String(number)[0])]

      number = +(String(number).slice(1))

      return angkaDepan +' ratus ' + numberToWords(number)

    }

  }

  if (String(number).length == 4 && String(number)[0] == 1) {
    return 'seribu ' + numberToWords(+(String(number).slice(1)))
  }else if (String(number).length == 4) {
    return words[+(String(number)[0])] +' ribu ' +numberToWords(+(String(number).slice(1)))
  }

  if (String(number).length == 5) {
    return numberToWords(+(String(number).slice(0, 2))) +' ribu ' + numberToWords(+(String(number).slice(2)))
  }

  if (String(number).length == 6) {
    return numberToWords(+(String(number).slice(0, 3))) +' ribu ' + numberToWords(+(String(number).slice(3)))
  }

  if (String(number).length == 7 && String(number)[0] == 1) {
    return words[+(String(number)[0])] +' juta ' +numberToWords(+(String(number).slice(1, 4)))  + numberToWords(+(String(number).slice(4)))
  }else if (String(number).length == 7) {
    return words[+(String(number)[0])] +' juta ' +numberToWords(+(String(number).slice(1, 4))) +' ribu ' + numberToWords(+(String(number).slice(4)))
  }

  if (String(number).length == 8) {
    return numberToWords(+(String(number).slice(0,2))) +' juta ' +numberToWords(+(String(number).slice(2, 5))) +' ribu ' +numberToWords(+(String(number).slice(5)))
  }else if (String(number).length == 9) {
    return numberToWords(+(String(number).slice(0,3))) +' juta ' +numberToWords(+(String(number).slice(3, 6))) +' ribu ' +numberToWords(+(String(number).slice(6)))
  }

  if (String(number).length == 10 && String(number)[0] == 1) {
    return words[+(String(number)[0])] +' milyar '
  }

  if (String(number).length == 10) {
    return words[+(String(number)[0])] +' milyar ' +numberToWords(+(String(number).slice(1, 4))) +' juta ' + numberToWords(+(String(number).slice(4, 7))) +' ribu ' +numberToWords(+(String(number).slice(7)))
  }else if (String(number).length == 11) {
    return numberToWords(+(String(number).slice(0,2))) +' milyar ' +numberToWords(+(String(number).slice(2, 5))) +' juta '+ numberToWords(+(String(number).slice(5, 8))) +' ribu ' +numberToWords(+(String(number).slice(8)))
  }else if (String(number).length == 12) {
    return numberToWords(+(String(number).slice(0,3))) +' milyar ' +numberToWords(+(String(number).slice(3, 6))) +' juta '+ numberToWords(+(String(number).slice(6, 9))) +' ribu ' +numberToWords(+(String(number).slice(9)))
  }

  if (String(number).length == 13 && String(number)[0] == 1) {
    return words[+(String(number)[0])] +' trilyun '
  }

  if (String(number).length == 13) {
    return words[+(String(number)[0])] + ' trilyun '  +numberToWords(+(String(number).slice(1, 4))) +' milyar ' + numberToWords(+(String(number).slice(4, 7))) +' juta ' +numberToWords(+(String(number).slice(7,10))) +' ribu '  +numberToWords(+(String(number).slice(10)))
  }else if (String(number).length == 14) {
    return numberToWords(+(String(number).slice(0,2))) +' trilyun ' +numberToWords(+(String(number).slice(2, 5))) +' milyar '+ numberToWords(+(String(number).slice(5, 8))) +' juta ' +numberToWords(+(String(number).slice(8,11))) +' ribu ' +numberToWords(+(String(number).slice(11)))
  }else if (String(number).length == 15) {
    return numberToWords(+(String(number).slice(0,3))) +' trilyun ' +numberToWords(+(String(number).slice(3, 6))) +' milyar '+ numberToWords(+(String(number).slice(6, 9))) +' juta ' +numberToWords(+(String(number).slice(9,12))) + ' ribu ' +numberToWords(+(String(number).slice(12)))
  }

return result

}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(9999999999999));
console.log(numberToWords(999999999999999));
