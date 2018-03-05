// function numberToWords(number) {
//   // Your code here
//   var numberStr = number.toString();
//   var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   var words = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
//   var result = '';

//   if (numberStr === '11') {
//     result += 'sebelas';
//   } else {
//     for (var i = numberStr.length - 1; i >= 0; i--) {
//       var index = 0;
//       if (i === numberStr.length - 1) {
//         if (numberStr[i] === '0') {
//           result += '';
//         } else {
//           index = numbers.indexOf(Number(numberStr[i]));
//           result += words[index] + ' ';
//         }
//       } else {
//         if (i === numberStr.length - 2) {
//           if (numberStr[i] === '1') {
//             result += 'sepuluh';
//           } else {
//             if (numberStr[i] === '0') {
//               result += '';
//             } else {
//               index = numbers.indexOf(Number(numberStr[i]));
//               result = words[index] + ' puluh ' + result;
//             }
//           }

//         } else {
//           if (i === numberStr.length - 3) {
//             if (numberStr[i] === '1') {
//               result = 'seratus ' + result;
//             } else {
//               index = numbers.indexOf(Number(numberStr[i]));
//               result = words[index] + ' ratus ' + result;
//             }
//           }
//         }
//       }
//     }
//   }

//   return result;
// }

// // Driver code
// console.log(numberToWords(999));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));

function numberToWords(number) {
  // Your code here
  var satuan = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  var kataSatuan = ['sembilan', 'delapan', 'tujuh', 'enam', 'lima', 'empat', 'tiga', 'dua', 'satu'];

  if (number === 0) {
    return '';
  } else {
    if (number < 10) {
      let index = satuan.indexOf(number);
      return kataSatuan[index];
    }

    if (number > 9 && number < 99) {
      if (number === 10) {
        return 'sepuluh';
      } else {
        if (number === 11) {
          return 'sebelas';
        } else {
          let front = Math.floor(number / 10);
          let back = number % 10;
          return numberToWords(front) + ' puluh ' + numberToWords(back);
        }
      }
    }

    if (number > 99 && number < 1000) {
      let front = Math.floor(number / 100);
      let back = number % 100;
      if (front === 1) {
        return 'seratus ' + numberToWords(back);
      } else {
        return numberToWords(front) + ' ratus ' + numberToWords(back);
      }
    }
  }

  if (number > 999 && number < 1000000) {
    let front = Math.floor(number / 1000)
    let back = number % 1000;
    if (front === 1) {
      return 'seribu';
    } else {
      return numberToWords(front) + ' ribu ' + numberToWords(back);
    }
  }

  if (number > 999999 && number < 1000000000) {
    let front = Math.floor(number / 1000000)
    let back = number % 1000000;
    return numberToWords(front) + ' juta ' + numberToWords(back);
  }

  if (number > 999999999 && number < 1000000000000) {
    let front = Math.floor(number / 1000000000)
    let back = number % 1000000000;
    return numberToWords(front) + ' milyar ' + numberToWords(back);
  }

  if (number > 999999999999 && number < 1000000000000000) {
    let front = Math.floor(number / 1000000000000)
    let back = number % 1000000000000;
    return numberToWords(front) + ' triliun ' + numberToWords(back);
  }
}

// Driver code
console.log(numberToWords(1100000000000));
console.log(numberToWords(111000));
console.log(numberToWords(2011845));