function basicNum(value){
    switch(value){
      case 1: terbilang = 'satu'; break;
      case 2: terbilang = 'dua'; break;
      case 3: terbilang = 'tiga'; break;
      case 4: terbilang = 'empat'; break;
      case 5: terbilang = 'lima'; break;
      case 6: terbilang = 'enam'; break;
      case 7: terbilang = 'tujuh'; break;
      case 8: terbilang = 'delapan'; break;
      case 9: terbilang = 'sembilan'; break;
    }
    return terbilang;
  }
  
  function belasNum(value){
    switch(value){
      case 11: terbilang = 'sebelas'; break;
      case 12: terbilang = 'dua belas'; break;
      case 13: terbilang = 'tiga belas'; break;
      case 14: terbilang = 'empat belas'; break;
      case 15: terbilang = 'lima belas'; break;
      case 16: terbilang = 'enam belas'; break;
      case 17: terbilang = 'tujuh belas'; break;
      case 18: terbilang = 'delapan belas'; break;
      case 19: terbilang = 'sembilan belas'; break;
    }
    return terbilang;
  }
  
  function belasNum(value){
    switch(value){
      case 11: terbilang = 'sebelas'; break;
      case 12: terbilang = 'dua belas'; break;
      case 13: terbilang = 'tiga belas'; break;
      case 14: terbilang = 'empat belas'; break;
      case 15: terbilang = 'lima belas'; break;
      case 16: terbilang = 'enam belas'; break;
      case 17: terbilang = 'tujuh belas'; break;
      case 18: terbilang = 'delapan belas'; break;
      case 19: terbilang = 'sembilan belas'; break;
    }
    return terbilang;
  }
  
  function numberToWords(number) {
    let digit = String(number);
    let terbilang = [];
  
    for(let i=0; i<digit.length; i++){
      if(digit.length == 3){
        if(digit[0] == 1){
          terbilang.push('seratus')
          break;
        } else {
          terbilang.push(basicNum(Number(digit[0])) + ' ratus')
          break;
        }
      }
      if(digit.length == 2){
        if(digit == 10){
          terbilang.push('sepuluh')
          break;
        } else if(digit == 11){
          terbilang.push('sebelas')
          break;
        } else if(digit[0] == 1 && Number(digit[1]) > 1){
          terbilang.push(belasNum(Number(digit)))
          break;
        } else {
          terbilang.push(basicNum(Number(digit[0])) + ' puluh')
          break;
        }
      }
      if(digit.length == 1){
        terbilang.push(basicNum(Number(digit[0])))
      }
    }
    
    return terbilang + numberToWords(number);
  }
  
  // Driver code
  console.log(numberToWords(5));
  console.log(numberToWords(11));
  console.log(numberToWords(15));
  console.log(numberToWords(17));
  console.log(numberToWords(19));
  console.log(numberToWords(31));
  console.log(numberToWords(805));
  console.log(numberToWords(705));
  // console.log(numberToWords(200000));
  // console.log(numberToWords(100000));
  // console.log(numberToWords(1000000));
  // console.log(numberToWords(2011845));
  