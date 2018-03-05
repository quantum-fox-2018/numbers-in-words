function numberToWords(number) {
  // Your code here

  let arrResult = [];

  let arrFixNumber = [
    {
      number: 1,
      words: 'satu'
    }, {
      number: 2,
      words: 'dua'
    }, {
      number: 3,
      words: 'tiga'
    }, {
      number: 4,
      words: 'empat'
    }, {
      number: 5,
      words: 'lima'
    }, {
      number: 6,
      words: 'enam'
    }, {
      number: 7,
      words: 'tujuh'
    }, {
      number: 8,
      words: 'delapan'
    }, {
      number: 9,
      words: 'sembilan'
    }, {
      number: 10,
      words: 'sepuluh'
    }
  ];

  let numLength = String(number).split('').length;
  // console.log(numLength); //2

  while (number > 0) {
    for (let i = 0; i < arrFixNumber.length; i++) {
      if (number <= 10) {
        if (number == arrFixNumber[i].number) {
          number -= arrFixNumber[i].number;
          arrResult.push(arrFixNumber[i].words);
        }
      } else if (number > 10 && number < 20) {
        let input = number % 10;
        if (input == 1) {
          number -= (input+10);
          arrResult.push(`sebelas `);
        } else if (input == arrFixNumber[i].number) {
          number -= (input+10);
          arrResult.push(`${arrFixNumber[i].words} belas `);
        } 
      } else if (number >= 20 && number < 100) {
        let input = Math.floor(number / 10);
        if (input == arrFixNumber[i].number) {
          number -= (input*10);
          arrResult.push(`${arrFixNumber[i].words} puluh `);
        }
      } else if (number >= 100 && number < 1000) {
        let input = Math.floor(number / 100);
        if (input == 1) {
          number -= (input*100);
          arrResult.push(`seratus `);
        } else if (input == arrFixNumber[i].number) {
          number -= (input*100);
          arrResult.push(`${arrFixNumber[i].words} ratus `);
        }
      }
    } 
  }

  return arrResult.join('');


}

// Driver code
console.log(numberToWords(210));
// console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
