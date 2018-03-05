function numberToWords(number) {

  if(number < 11) {
    return satuan(number)
  }

  if(number > 9 && number < 20) {
    return belasan(number)
  }

  if(number > 19 && number < 100) {
    return puluhan(number)
  }

  if(number > 99 && number < 1000) {
    return ratusan(number)
  }

  if(number > 999 && number < 1000000) {
    return ribuan(number)
  }

  if(number > 999999 && number < 1000000000) {
    return jutaan(number)
  }

  if(number > 999999999 && number < 1000000000000) {
    return miliyar(number)
  }

  if(number > 999999999999 && number < 1000000000000000) {
    return triliun(number)
  }

  function triliun(number) {
    let depan = Math.floor(number/1000000000000)
    let sisa = number % 1000000000000
    return numberToWords(depan) + ' triliun ' + numberToWords(sisa)
  }

  function miliyar(number) {
    let depan = Math.floor(number/1000000000)
    let sisa = number % 1000000000
    return numberToWords(depan) + ' miliyar ' + numberToWords(sisa)
  }

  function jutaan(number) {
    let depan = Math.floor(number/1000000)
    let sisa = number % 1000000
    return numberToWords(depan) + ' juta ' + numberToWords(sisa)
  }

  function ribuan(number) {
    let depan = Math.floor(number/1000);
    let sisa = number % 1000;

    if(depan == 1) {
      return 'seribu ' + numberToWords(sisa);
    } else {
      return numberToWords(depan) + ' ribu ' + numberToWords(sisa);
    }
  }

  function ratusan(number) {
    let ratusan = Math.floor(number/100)
    let sisa = number % 100;
    
    if(ratusan == 1) {
      return 'seratus ' + numberToWords(sisa);
    } else {
      return satuan(ratusan) + ' ratus ' + numberToWords(sisa);
    }
  }

  function puluhan(number) {
    let puluhan = Math.floor(number/10)
    let sisa = number % 10;
    return satuan(puluhan) + ' puluh ' + numberToWords(sisa)
  }

  function belasan(number) {
    let sisa = number % 10;
    if(sisa == 1) {
      return 'sebelas'
    } else {
      return satuan(sisa) +' belas'
    }
  }

  function satuan(number) {
    let satuan = [{
      nilai: 0,
      bilangan: ''
    },{
      nilai: 1,
      bilangan: 'satu'
    },{
      nilai: 2,
      bilangan: 'dua'
    },{
      nilai: 3,
      bilangan: 'tiga'
    },{
      nilai: 4,
      bilangan: 'empat'
    },{
      nilai: 5,
      bilangan: 'lima'
    },{
      nilai: 6,
      bilangan: 'enam'
    },{
      nilai: 7,
      bilangan: 'tujuh'
    },{
      nilai: 8,
      bilangan: 'delapan'
    },{
      nilai: 9,
      bilangan: 'sembilan'
    },{
      nilai: 10,
      bilangan: 'sepuluh'
    }]
  
    for(let i=satuan.length-1; i>=0; i--) {
      if(number - satuan[i].nilai == 0) {
        return satuan[i].bilangan
      }
    }
  }

}

// Driver code
console.log(numberToWords(7));
console.log(numberToWords(10));
console.log(numberToWords(11));
console.log(numberToWords(27));
console.log(numberToWords(20));
console.log(numberToWords(705));
console.log(numberToWords(100));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
// console.log(numberToWords(999000000000000));
