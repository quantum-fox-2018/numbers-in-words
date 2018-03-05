//kalo cuman sampe 999

function numberToWords(number) {
  let numStr = String(number);
  let angkastr = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  let temp = '';

  if(numStr[0] == 1){
      //console.log(numStr);
      if(numStr.length % 15 == 0){
          temp += 'seratus ';
      }else if(numStr.length % 14 == 0){
          temp += 'sepuluh ';
      }else if(numStr.length % 12 == 0){
          temp += 'seratus ';
      }else if(numStr.length % 11 == 0 && numStr[1] == 0){
          temp += 'sepuluh Milyar ';
      }else if(numStr.length % 11 == 0 && numStr[1] == 1){
          temp += 'sebelas Milyar ';
          numStr = numStr.slice(1);
      }else if(numStr.length % 11 == 0){
          for(let i = 0; i < angkastr.length; i++){

              if(numStr[0] == i+1){
                  temp = angkastr[i]+' belas Milyar';
                  numStr = numStr.slice(1);
              }

          }
      }else if(numStr.length % 10 == 0){
          temp += 'seribu ';
      }else if(numStr.length % 9 == 0){
          temp += 'seratus ';
      }else if(numStr.length % 8 == 0 && numStr[1] == 0){
          temp += 'sepuluh juta ';
      }else if(numStr.length % 8 == 0 && numStr[1] == 1){
          temp += 'sebelas juta ';
          numStr = numStr.slice(1);
      }else if(numStr.length % 8 == 0){
          for(let i = 0; i < angkastr.length; i++){

              if(numStr[0] == i+1){
                  temp = angkastr[i]+' belas juta';
                  numStr = numStr.slice(1);
              }

          }
      }else if(numStr.length % 7 == 0){
          temp += 'sejuta ';
      }else if(numStr.length % 6 == 0){
          temp += 'seratus ';
      }else if(numStr.length % 5 == 0 && numStr[1] == 0){
          temp += 'sepuluh ribu ';
      }else if(numStr.length % 5 == 0 && numStr[1] == 1){
          temp += 'sebelas ribu ';
          numStr = numStr.slice(1);
      }else if(numStr.length % 5 == 0){
          for(let i = 0; i < angkastr.length; i++){

              if(numStr[0] == i+1){
                  temp = angkastr[i]+' belas ribu';
                  numStr = numStr.slice(1);
              }

          }
      }else if(numStr.length % 4 == 0){
          temp += 'seribu ';
      }else if(numStr.length % 3 == 0){
          temp += 'seratus ';
      }else if (numStr.length % 2 == 0 && numStr[1] == 0) {
          temp += 'sepuluh ';
      }else if (numStr.length % 2 == 0 && numStr[1] == 1) {
          temp += 'sebelas ';
          numStr = numStr.slice(1);
      }else {
          for(let i = 0; i < angkastr.length; i++){

              if(numStr[0] == i+1){
                  temp = angkastr[i]+' belas ';
                  numStr = numStr.slice(1);
              }

          }
      }

  }else {
      for(let i = 0; i < angkastr.length; i++){

          if(numStr[0] == i+1){
              temp = angkastr[i]+' ';
          }

      }

      if(numStr.length === 15){
          temp += 'ratus ';
      }else if(numStr.length === 14){
          temp += 'puluh ';
      }else if(numStr.length === 13){
          temp += 'triliun ';
      }else if(numStr.length === 12){
          temp += 'ratus ';
      }else if(numStr.length === 11){
          temp += 'puluh ';
      }else if(numStr.length === 10){
          temp += 'Milyar ';
      }else if(numStr.length === 9){
          temp += 'ratus ';
      }else if(numStr.length === 8){
          temp += 'puluh ';
      }else if(numStr.length === 7){
          temp += 'juta ';
      }else if(numStr.length === 6){
          temp += 'ratus ';
      }else if(numStr.length === 5){
          temp += 'puluh ';
      }else if(numStr.length === 4){
          temp += 'ribu ';
      }else if(numStr.length === 3){
          temp += 'ratus ';
      }else if(numStr.length === 2){
          if(numStr.slice(0,2) < 20) {
              temp += 'belas';
              numStr = numStr.slice(1);
          }else {
              temp += 'puluh ';
          }
      }

  }


  if(numStr.length <= 1){
      return temp;
  }else{
      let slice = numStr.slice(1);
      return temp + numberToWords(parseInt(slice));
  }

}

// Driver code
console.log(numberToWords(18000000000));
console.log(numberToWords(12000));
console.log(numberToWords(17));
console.log(numberToWords(567765679300));
console.log(numberToWords(199000000001000));
console.log('=============');
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079));
console.log(numberToWords(82102713));
console.log('=============');
// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
