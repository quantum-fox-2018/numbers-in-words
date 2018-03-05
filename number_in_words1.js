function numberToWords(number) {
  // Your code here

  let arrResult = [];

  let arrFixNumber = [
    {
      number: 0,
      words: ''
    }, {
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
  
  if (number <= 10) {
    return satuan(number); 
  }

  if (number > 10 && number < 20) {
    return belasan(number);
  }

  if (number >= 20 && number < 100) {
    return puluhan(number);
  }

  if (number >= 100 && number < 1000) {
    return ratusan(number);
  }

  if (number >= 1000 && number < 1000000) {
    return ribuan(number);
  }

  if (number >= 1000000 && number < 1000000000) {
    return jutaan(number);
  }

  if (number >= 1000000000 && number < 1000000000000) {
    return milyaran(number);
  }

  if (number >= 1000000000000 && number < 1000000000000000) {
    return triliunan(number);
  }

  // ----------------------------------SECONDARY FUNCTION--------------------------------------

  function satuan(number) {
    for (let i = 0; i < arrFixNumber.length; i++) {
      if (number == arrFixNumber[i].number) {
        number -= arrFixNumber[i].number;
        return arrFixNumber[i].words;
      } 
    }
  }

  function belasan(number) {
    let firstNumber = number - 10;
    let secondNumber = number % 10;
    if (firstNumber == 1) {
      return 'sebelas';
    } else {
      // return numberToWords(secondNumber) + ' belas ';
      return `${numberToWords(secondNumber)} belas`;
    }
  }

  function puluhan(number) {
    let firstNumber = Math.floor(number/10);
    let secondNumber = number % 10;
    // return numberToWords(firstNumber) + ' puluh ' + numberToWords(secondNumber);
    return `${numberToWords(firstNumber)} puluh ${numberToWords(secondNumber)}`;
  }

  function ratusan(number) {
    let firstNumber = Math.floor(number/100);
    let secondPart = number % 100;
    if (firstNumber == 1) {
      // return 'seratus' + numberToWords(secondPart);
      return `seratus ${numberToWords(secondPart)}`;
    } else {
      // return numberToWords(firstNumber) + ' ratus' + numberToWords(secondPart);
      return `${numberToWords(firstNumber)} ratus ${numberToWords(secondPart)}`;
    }
  }

  function ribuan(number) {
    let firstPart = Math.floor(number/1000);
    let secondPart = number % 1000;
    // return numberToWords(firstPart) + ' ribu ' + numberToWords(secondPart);
    return `${numberToWords(firstPart)} ribu ${numberToWords(secondPart)}`;
  }
  
  function jutaan(number) {
    let firstPart = Math.floor(number/1000000);
    let secondPart = number % 1000000;
    // return numberToWords(firstPart) + ' juta ' + numberToWords(secondPart);
    return `${numberToWords(firstPart)} juta ${numberToWords(secondPart)}`;
  }
  
  function milyaran(number) {
    let firstPart = Math.floor(number/1000000000);
    let secondPart = number % 1000000000;
    return `${numberToWords(firstPart)} milyar ${numberToWords(secondPart)}`;
  }

  function triliunan(number) {
    let firstPart = Math.floor(number/1000000000000);
    let secondPart = number % 1000000000000;
    return `${numberToWords(firstPart)} triliun ${numberToWords(secondPart)}`;
  }


}

// Driver code
// console.log(numberToWords(999));
// console.log(numberToWords(705));
// console.log(numberToWords(10510));
// console.log(numberToWords(100000));
// console.log(numberToWords(1500210));
console.log(numberToWords(2011845000500));
