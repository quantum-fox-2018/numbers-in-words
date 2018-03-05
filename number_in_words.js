const numberTerbilang = [
  {value: 1, label: "satu"},
  {value: 2, label: "dua"},
  {value: 3, label: "tiga"},
  {value: 4, label: "empat"},
  {value: 5, label: "lima"},
  {value: 6, label: "enam"},
  {value: 7, label: "tujuh"},
  {value: 8, label: "delapan"},
  {value: 9, label: "sembilan"},
  {value: 10, label: "sepuluh"},
  {value: 11, label: "sebelas"},
  {value: 12, label: "dua belas"},
  {value: 13, label: "tiga belas"},
  {value: 14, label: "empat belas"},
  {value: 15, label: "lima belas"},
  {value: 16, label: "enam belas"},
  {value: 17, label: "tujuh belas"},
  {value: 18, label: "delapan belas"},
  {value: 19, label: "sembilan belas"}
];


function switchWord(number){
  for (var i = 0; i < numberTerbilang.length; i++) {
    if (number === numberTerbilang[i].value) {
      return numberTerbilang[i].label;
    }
  }
  return ""
}

function numberToWords(number) {
  //satuan
  if (number >= 0 && number <= 19) {
    return switchWord(number);
  }
  //puluhan
  else if(number > 19 && number < 100){
    bilanganInti = Math.floor(number/10);
    bilanganSisa = number - bilanganInti*10
    return switchWord(bilanganInti) + " puluh " + switchWord(bilanganSisa)
  //ratusan "seratus"
  }else if(number >= 100 && number < 200){
    number = number - 100;
    if (number === 100) {
      return "seratus";
    }else{
      return "seratus " + numberToWords(number);
    }
  //ratusan
  }else if(number >= 200 && number < 1000){
    numberInti = Math.floor(number/100)
    sisa = number - Math.floor(number/100)*100
    return switchWord(numberInti) + " ratus " + numberToWords(sisa);
  }
  //ribuan "seribu"
  else if(number >= 1000  && number < 2000){
    numberInti = Math.floor(number/1000)
    sisa = number - numberInti*1000
    return "seribu " + numberToWords(sisa);
  }
  //ribuan
  else if(number >= 2000 && number < 10000){
    numberInti = Math.floor(number/1000)
    sisa = number - numberInti*1000
    return switchWord(numberInti) + " ribu " + numberToWords(sisa);
  }
  else if(number >= 10000 && number < 1000000){
    numberInti = Math.floor(number/1000)
    sisa = number - numberInti*1000
    return numberToWords(numberInti) + " ribu " + numberToWords(sisa);

    //juta
  }else if(number >= 1000000 && number < 1000000000){
    numberInti = Math.floor(number/1000000)
    sisa = number - numberInti*1000000
    return numberToWords(numberInti) + " juta " + numberToWords(sisa);

    //miliar
  }else if(number >= 1000000000 && number < 1000000000000){
    numberInti = Math.floor(number/1000000000)
    sisa = number - numberInti*1000000000
    return numberToWords(numberInti) + " miliar " + numberToWords(sisa);

    //triliun
  }else if(number >= 1000000000000 && number < 1000000000000000){
  numberInti = Math.floor(number/1000000000000)
  sisa = number - numberInti*1000000000000
  return numberToWords(numberInti) + " triliun " + numberToWords(sisa);
  }

}



// Driver code
console.log(numberToWords(5));
console.log(numberToWords(72));
console.log(numberToWords(250));
console.log(numberToWords(200));
console.log(numberToWords(999));
console.log(numberToWords(1005))
console.log(numberToWords(9999))
console.log(numberToWords(99999))
console.log(numberToWords(99500000));
console.log(numberToWords(1500000000));
console.log(numberToWords(2500000000000));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
