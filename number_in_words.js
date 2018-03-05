function numberToWords(number) {
  // Your code here
  var text = [
              [1, 'satu'], 
              [2, 'dua'], 
              [3, 'tiga'], 
              [4, 'empat'], 
              [5, 'lima'], 
              [6, 'enam'], 
              [7, 'tujuh'], 
              [8, 'delapan'], 
              [9, 'sembilan'],
            ];


            //500 340

  if(number<1) return '';

  else{
    //TRILIUN
    if(number>=100000000000){
      var numberStr = number + '';

      return numberToWords(parseInt(numberStr.substr(0,1))) + ' triliun ' + numberToWords(parseInt(numberStr.substr(1, 9)));
    }
    //PULUHAN MILIAR
    if(number>=10000000000){
      var numberStr = number + '';

      return numberToWords(parseInt(numberStr.substr(0,2))) + ' miliar ' + numberToWords(parseInt(numberStr.substr(2, 9)));
    }
    //MILIAR
    if(number>=1000000000){
      var numberStr = number + '';

      return numberToWords(parseInt(numberStr.substr(0,1))) + ' miliar ' + numberToWords(parseInt(numberStr.substr(2, 9)));
    }
    //RATUSAN JUTA
    if(number>=100000000){
      var numberStr = number + '';

      return numberToWords(parseInt(numberStr.substr(0,3))) + ' juta ' + numberToWords(parseInt(numberStr.substr(3, 6)));
    }
    //PULUHAN JUTA
    if(number>=10000000){
      var numberStr = number + '';

      return numberToWords(parseInt(numberStr.substr(0,2))) + ' juta ' + numberToWords(parseInt(numberStr.substr(2, 6)));
    }
    //JUTAAN
    if(number>=1000000){
      var numberStr = number + '';

      //Getting first number
      var firstNum = parseInt(numberStr.charAt(0));
      var theRest = parseInt(numberStr.slice(1));

      for(var counter =0; counter<text.length; counter++){
        if(firstNum === 1){
          return 'sejuta' + ' ' + numberToWords(theRest);
        }else if(firstNum === text[counter][0] && firstNum !== 1){
          return text[counter][1] + ' juta ' + numberToWords(theRest); 
        }
      }

    }//RATUSAN RIBU
    else if(number>=100000){
      var numStr = number + '';
      return numberToWords(parseInt(numStr.substr(0,3))) + ' ribu ' + numberToWords(parseInt(numStr.substr(3,3)));
    }
    //PULUHAN RIBU
    else if(number>=10000){
      var numStr = number + '';
      return numberToWords(parseInt(numStr.substr(0,2))) + ' ribu ' + numberToWords(parseInt(numStr.substr(2,3)));
    }
    //RIBUAN
    else if(number>=1000){
      var numStr = number + '';
      return numberToWords(parseInt(numStr.substr(0,1))) + ' ribu ' + numberToWords(parseInt(numStr.substr(1,3)));
    }
    //RATUSAN
    else if(number>=100){
      var numberStr = number + '';
      var firstNum = parseInt(numberStr.charAt(0));
      var theRest = parseInt(numberStr.slice(1));

      for(var counter = 0; counter<text.length; counter++){
        if(firstNum === 1){
          return 'seratus' + ' ' + numberToWords(theRest);
        }else if(firstNum === text[counter][0] && firstNum !== 1){
          return text[counter][1] + ' ratus ' + numberToWords(theRest); 
        }
      }
    }
    //PULUHAN
    else if(number>=20){
      var numberStr = number + '';
      var firstNum = parseInt(numberStr.charAt(0));
      var theRest = parseInt(numberStr.slice(1));

      for(var counter =0; counter<text.length; counter++){
        if(firstNum === text[counter][0] && firstNum !== 1){
          return text[counter][1] + ' puluh ' + numberToWords(theRest); 
        }
      }
    }
    //BELASAN
    else if(number>= 10 && number < 20){
      var numberStr = number + '';
      var secondNum = parseInt(numberStr.charAt(1));

      for(var counter = 0; counter<text.length; counter++){
        if(secondNum === 1){
          return 'sebelas';
        }else if(secondNum === text[counter][0]){
          return text[counter][1] + ' belas'
        }
      }
    }
    //SATUAN
    else if(number>=1){
      for(var counter = 0; counter<text.length; counter++){
        if(number === text[counter][0]){
          return text[counter][1];
        }
      }
    }
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(12011845));
console.log(numberToWords(42011845));
console.log(numberToWords(142011845));
console.log(numberToWords(2142011845));
console.log(numberToWords(12142011845));
console.log(numberToWords(812142011845));