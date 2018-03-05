function numberToWords(number) {
  var numArr = (number.toString()).split('');
  var sisa = numArr.length % 3;
  var count = Math.round(numArr.length / 3);
  var result = '';

  if (sisa > 0) {
    if (sisa === 1) {
      switch (numArr[0]) {
        case '0': result = result + ''; break;
        case '1': result = result + ' satu '; break;
        case '2': result = result + ' dua '; break;
        case '3': result = result + ' tiga '; break;
        case '4': result = result + ' empat '; break;
        case '5': result = result + ' lima '; break;
        case '6': result = result + ' enam '; break;
        case '7': result = result + ' tujuh '; break;
        case '8': result = result + ' delapan '; break;
        case '9': result = result + ' sembilan '; break;
      }
      switch (count) {
        case 2: result = result + 'juta'; break;
        case 1: result = result + 'ribu'; break;
      }
    } else if (sisa === 2){
      switch (numArr[0]) {
        case '0': result = result + ''; break;
        case '1':
          switch (numArr[1]) {
            case '0': result = result + ' sepuluh '; break;
            case '1': result = result + ' sebelas '; break;
            case '2': result = result + ' dua belas '; break;
            case '3': result = result + ' tiga belas '; break;
            case '4': result = result + ' empat belas '; break;
            case '5': result = result + ' lima belas '; break;
            case '6': result = result + ' enam belas '; break;
            case '7': result = result + ' tujuh belas '; break;
            case '8': result = result + ' delapan belas '; break;
            case '9': result = result + ' sembilan belas '; break;
            }
          break;
        case '2': result = result + ' dua puluh '; break;
        case '3': result = result + ' tiga puluh '; break;
        case '4': result = result + ' empat puluh '; break;
        case '5': result = result + ' lima puluh '; break;
        case '6': result = result + ' enam puluh '; break;
        case '7': result = result + ' tujuh puluh '; break;
        case '8': result = result + ' delapan puluh '; break;
        case '9': result = result + ' sembilan puluh '; break;
      }

      if (numArr[0] !== '1') {
        switch (numArr[1]) {
          case '0': result = result + ''; break;
          case '1': result = result + ' satu '; break;
          case '2': result = result + ' dua '; break;
          case '3': result = result + ' tiga '; break;
          case '4': result = result + ' empat '; break;
          case '5': result = result + ' lima '; break;
          case '6': result = result + ' enam '; break;
          case '7': result = result + ' tujuh '; break;
          case '8': result = result + ' delapan '; break;
          case '9': result = result + ' sembilan '; break;
        }
      }
      switch (count) {
        case 2: result = result + 'juta'; break;
        case 1: result = result + 'ribu'; break;
      }
    } else if (sisa === 3){
      switch (numArr[0]) {
        case '0': result = result + ''; break;
        case '1': result = result + ' seratus '; break;
        case '2': result = result + ' dua ratus '; break;
        case '3': result = result + ' tiga ratus '; break;
        case '4': result = result + ' empat ratus '; break;
        case '5': result = result + ' lima ratus '; break;
        case '6': result = result + ' enam ratus '; break;
        case '7': result = result + ' tujuh ratus '; break;
        case '8': result = result + ' delapan ratus '; break;
        case '9': result = result + ' sembilan ratus '; break;
      }

      switch (numArr[1]) {
        case '0': result = result + ''; break;
        case '1':
          switch (numArr[2]) {
            case '0': result = result + ' sepuluh '; break;
            case '1': result = result + ' sebelas '; break;
            case '2': result = result + ' dua belas '; break;
            case '3': result = result + ' tiga belas '; break;
            case '4': result = result + ' empat belas '; break;
            case '5': result = result + ' lima belas '; break;
            case '6': result = result + ' enam belas '; break;
            case '7': result = result + ' tujuh belas '; break;
            case '8': result = result + ' delapan belas '; break;
            case '9': result = result + ' sembilan belas '; break;
            }
          break;
        case '2': result = result + ' dua puluh '; break;
        case '3': result = result + ' tiga puluh '; break;
        case '4': result = result + ' empat puluh '; break;
        case '5': result = result + ' lima puluh '; break;
        case '6': result = result + ' enam puluh '; break;
        case '7': result = result + ' tujuh puluh '; break;
        case '8': result = result + ' delapan puluh '; break;
        case '9': result = result + ' sembilan puluh '; break;
      }

      if (numArr[1] !== '1') {
        switch (numArr[2]) {
          case '0': result = result + ''; break;
          case '1': result = result + ' satu '; break;
          case '2': result = result + ' dua '; break;
          case '3': result = result + ' tiga '; break;
          case '4': result = result + ' empat '; break;
          case '5': result = result + ' lima '; break;
          case '6': result = result + ' enam '; break;
          case '7': result = result + ' tujuh '; break;
          case '8': result = result + ' delapan '; break;
          case '9': result = result + ' sembilan '; break;
        }
      }
      switch (count) {
        case 2: result = result + 'juta'; break;
        case 1: result = result + 'ribu'; break;
      }
    }
  }

  for (var i = 0; i < count; i++) {
    var min = sisa + 3*i;
    var arr = numArr.slice(min , min+3);

    switch (arr[0]) {
      case '0': result = result + ''; break;
      case '1': result = result + ' seratus '; break;
      case '2': result = result + ' dua ratus '; break;
      case '3': result = result + ' tiga ratus '; break;
      case '4': result = result + ' empat ratus '; break;
      case '5': result = result + ' lima ratus '; break;
      case '6': result = result + ' enam ratus '; break;
      case '7': result = result + ' tujuh ratus '; break;
      case '8': result = result + ' delapan ratus '; break;
      case '9': result = result + ' sembilan ratus '; break;
    }

    switch (arr[1]) {
      case '0': result = result + ''; break;
      case '1':
        switch (arr[2]) {
          case '0': result = result + ' sepuluh '; break;
          case '1': result = result + ' sebelas '; break;
          case '2': result = result + ' dua belas '; break;
          case '3': result = result + ' tiga belas '; break;
          case '4': result = result + ' empat belas '; break;
          case '5': result = result + ' lima belas '; break;
          case '6': result = result + ' enam belas '; break;
          case '7': result = result + ' tujuh belas '; break;
          case '8': result = result + ' delapan belas '; break;
          case '9': result = result + ' sembilan belas '; break;
          }
        break;
      case '2': result = result + ' dua puluh '; break;
      case '3': result = result + ' tiga puluh '; break;
      case '4': result = result + ' empat puluh '; break;
      case '5': result = result + ' lima puluh '; break;
      case '6': result = result + ' enam puluh '; break;
      case '7': result = result + ' tujuh puluh '; break;
      case '8': result = result + ' delapan puluh '; break;
      case '9': result = result + ' sembilan puluh '; break;
    }

    if (arr[1] !== '1') {
      switch (arr[2]) {
        case '0': result = result + ''; break;
        case '1': result = result + ' satu '; break;
        case '2': result = result + ' dua '; break;
        case '3': result = result + ' tiga '; break;
        case '4': result = result + ' empat '; break;
        case '5': result = result + ' lima '; break;
        case '6': result = result + ' enam '; break;
        case '7': result = result + ' tujuh '; break;
        case '8': result = result + ' delapan '; break;
        case '9': result = result + ' sembilan '; break;
      }
    }

    if(arr[2] !== '0'){
      switch (count-i) {
        case 3: result = result + 'juta'; break;
        case 2: result = result + 'ribu'; break;
      }
    }

  }

  return result;
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
