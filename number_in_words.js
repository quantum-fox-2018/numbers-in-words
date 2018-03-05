function numberToWords(number) {
  // Your code here
  let word = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  let result = ''

  if(number < 12){
    result = word[number]
  }
  else if(number < 20){
    return numberToWords(number%10) + ' belas'
  }
  else if(number < 100){
    return numberToWords(Math.floor(number/10)) +' '+'puluh'+' '+ numberToWords(number%10)
  }
  else if(number < 200){
    return 'seratus'+' '+ numberToWords(number%100)
  }
  else if(number < 1000){
    return numberToWords(Math.floor(number/100)) +' '+'ratus'+' '+ numberToWords(number%100)
  }
  else if(number < 2000){
    return 'seribu'+' '+ numberToWords(number%1000)
  }
  else if(number < 1000000){
    return numberToWords(Math.floor(number/1000)) +' '+'ribu'+' '+ numberToWords(number%1000)
  }
  else if(number < 1000000000){
    return numberToWords(Math.floor(number/1000000)) +' '+'juta'+' '+ numberToWords(number%1000000)
  }
  else if(number < 1000000000000){
    return numberToWords(Math.floor(number/1000000000)) +' '+'milyar'+' '+ numberToWords(number%1000000000)
  }
  else if(number < 1000000000000000){
    return numberToWords(Math.floor(number/1000000000000)) +' '+'trilyun'+' '+ numberToWords(number%1000000000000)
  }

  return result
}
// Driver code
console.log(numberToWords(1000000000000));
console.log('===='+numberToWords(999999999999999)+'====');

console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
