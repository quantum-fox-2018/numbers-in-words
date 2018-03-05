function numberToWords(number) {
  // Your code here
  var word=['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  if(number<12){
    return word[number]
  }
  else if(number<20){
    return numberToWords(number%10)+' belas'
  }
  else if(number<100){
    return numberToWords(Math.floor(number/10))+' puluh '+numberToWords(number%10)
  }
  else if(number<200){
    return 'seratus '+numberToWords(number%100)
  }
  else if(number<1000){
    return numberToWords(Math.floor(number/100))+' ratus '+numberToWords(number%100)
  }
  else if(number<2000){
    return 'seribu '+numberToWords(number%1000)
  }
  else if(number<1000000){
    return numberToWords(Math.floor(number/1000))+' ribu '+numberToWords(number%1000)
  }
  else if(number<1000000000){
    return numberToWords(Math.floor(number/1000000))+' juta '+numberToWords(number%1000000)
  }
  else if(number<1000000000000){
    return numberToWords(Math.floor(number/1000000000))+' milyar '+numberToWords(number%1000000000)
  }
  else if(number<1000000000000000){
    return numberToWords(Math.floor(number/1000000000000))+' triliun '+numberToWords(number%1000000000000)
  }
}

// Driver code
console.log(numberToWords(7));
console.log(numberToWords(18));
console.log(numberToWords(69));
console.log(numberToWords(182));
console.log(numberToWords(567));
console.log(numberToWords(1234));
console.log(numberToWords(5674));
console.log(numberToWords(1234567));
console.log(numberToWords(1234567000));
console.log(numberToWords(1999999999999));
