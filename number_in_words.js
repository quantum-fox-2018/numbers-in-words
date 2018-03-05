function numberToWords(number) {
  var arrKamus = [
                  [1,' satu'],[2,' dua'],[3,' tiga'],[4,' empat'],[5,' lima'],[6,' enam'],[7,' tujuh'],[8,' delapan'],
                  [9,' sembilan'],[10,' puluh'],[11,' sebelas'],[12,' dua belas'],[13,' tiga belas'],[14,' empat belas'],
                  [15,' lima belas'],[16,' enam belas'],[17,' tujuh belas'],[18,' delapan belas'],[19,' sembilan belas'],
                 ]

  var counter = 0
  var a = 0; b = 0
  var konversi = ''
  var number2 = number

  // base
  if(number<1){
    return konversi
  }

  // recurtion
  // while(number>=10000){
  //   number -= 10000
  //   a++
  //   while(number>=1000){
  //     number -= 1000
  //     b++
  //   }
  // }
  // // console.log(a)
  // counter = parseInt(a.toString()+b.toString())
  // for(var i=0; i<arrKamus.length; i++){
  //   if(arrKamus[i][0]===counter){
  //     konversi += arrKamus[i][1]
  //   }
  // }
  //
  // if(counter>0 && counter<20){
  //   konversi+=' ribu'
  // }
  // else {
  //   var c = parseInt(number2.toString().substr(0,2))
  //
  //   counter = 0
  //   while(c>=1){
  //     c -= 1
  //     counter++
  //   }
  //   console.log(counter)
  //   for(var i=0; i<arrKamus.length; i++){
  //     if(arrKamus[i][0]===counter){
  //       konversi += arrKamus[i][1]
  //     }
  //   }
  //
  //   if(counter>0){
  //     konversi+=' puluh ribu'
  //   }
  // }

//===============================================
  // counter = 0
  while(number>=1000){
    number -= 1000
    counter++
  }

  for(var i=0; i<arrKamus.length; i++){
    if(arrKamus[i][0]===counter){
      konversi += arrKamus[i][1]
    }
  }

  if(counter>0){
    konversi+=' ribu'
  }

//===============================================
  counter = 0
  while(number>=100){
    number -= 100
    counter++
  }

  for(var i=0; i<arrKamus.length; i++){
    if(arrKamus[i][0]===counter){
      konversi += arrKamus[i][1]
    }
  }

  if(counter>0){
    konversi+=' ratus'
  }

//===============================================
  counter = 0
  while(number>=10){
    number -= 10
    counter++
  }

  for(var i=0; i<arrKamus.length; i++){
    if(arrKamus[i][0]===counter){
      konversi += arrKamus[i][1]
    }
  }

  if(counter>0){
    konversi+=' puluh'
  }

//===============================================
  counter = 0
  while(number>=1){
    number -= 1
    counter++
  }

  for(var i=0; i<arrKamus.length; i++){
    if(arrKamus[i][0]===counter){
      konversi += arrKamus[i][1]
    }
  }

  return konversi + numberToWords(number)
  // console.log(konversi)

}

// Driver code
console.log(numberToWords(19549));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
