function numberToWords(number) {
  let terbilang = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];

  if(number <= 11){
    return terbilang[number]
  } else {
    if(number <= 19){
      return terbilang[number % 10] + ' belas'
    } else if(number < 100){
      return terbilang[Math.floor(number/10)] + ' puluh ' + numberToWords(number%10)
    } else if(number < 1000){ 
      if(Math.floor(number/100) == 1){
        return 'seratus ' + numberToWords(number%100)
      } else {
        return terbilang[Math.floor(number/100)] + ' ratus ' + numberToWords(number%100)
      }
    } else if(number < 1000000){
      if(Math.floor(number/1000) == 1){
        return 'seribu ' + numberToWords(number%1000)
      } else {
        return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number%1000)
      }
    } else if(number < 1000000000){
      if(Math.floor(number/1000000) == 1){
        return 'sejuta' + numberToWords(number%1000000)
      } else {
        return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number%1000000)
      }
    } else if(number < 1000000000000){
      if(Math.floor(number/1000000000) == 1){
        return 'semilyar' + numberToWords(number%1000000000)
      } else {
        return numberToWords(Math.floor(number/1000000000)) + ' milyar ' + numberToWords(number%1000000000)
      }
    } else if(number < 1000000000000000){
      if(Math.floor(number/1000000000000) == 1){
        return 'satu trilyun ' + numberToWords(number%1000000000000)
      } else{
        return numberToWords(Math.floor(number/1000000000000)) + ' trilyun ' + numberToWords(number%1000000000000)
      }
    }
  }
}

// Driver code
// console.log(numberToWords(5));
// console.log(numberToWords(11));
// console.log(numberToWords(19));
// console.log(numberToWords(20));
// console.log(numberToWords(99));
// console.log(numberToWords(100));
// console.log(numberToWords(125));
// console.log(numberToWords(2990));
// console.log(numberToWords(235992));
// console.log(numberToWords(9782563));
// console.log(numberToWords(129312125)); // 129.312.125
// console.log(numberToWords(194568123)); // 194.568.123
// console.log(numberToWords(1652325987456)); // 1.652.325.987.456
console.log(numberToWords(5652325987456)); // 5.652.325.987.456
// console.log(numberToWords(180));
// console.log(numberToWords(999));
// console.log(numberToWords(1000));
// console.log(numberToWords(1299));
// console.log(numberToWords(2999));
// console.log(numberToWords(3752));
// console.log(numberToWords(235000));
// console.log(numberToWords(100000));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
