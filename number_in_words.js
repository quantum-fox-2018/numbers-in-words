// Cara 1
function numberToWords(number) {
  // Your code here
  var digit = [13, 10, 7, 4];
  var terbilang = ["triliun", "milyar", "juta", "ribu"];
  let angka = [
    ["sembilan", 9],
    ["delapan", 8],
    ["tujuh", 7],
    ["enam", 6],
    ["lima", 5],
    ["empat", 4],
    ["tiga", 3],
    ["dua", 2],
    ["satu", 1]
  ];

  number = number.toString();
  var panjangNumber = number.length;
  var arrAngka = [];

  for(let i = 0; i < digit.length; i++) {
    if(number.length >= digit[i]) {
      var potong = number.length%3;
      if(potong === 0) {
        potong = 3;
      }
      var terbilangTampung = checkNumberToWords(parseInt(number.slice(0, potong)));
      if(terbilangTampung) {
        arrAngka.push(terbilangTampung + " " + terbilang[i]);
        number = number.slice(potong);
      }
    }
  }

  arrAngka.push(checkNumberToWords(parseInt(number)));

  return arrAngka.join(" ");

  function checkNumberToWords(number) {
    // Your code here
    let angka = [
      ["sembilan", 9],
      ["delapan", 8],
      ["tujuh", 7],
      ["enam", 6],
      ["lima", 5],
      ["empat", 4],
      ["tiga", 3],
      ["dua", 2],
      ["satu", 1]
    ];

    var hasil = [];
    while(number) {
      if(number >= 100) {
        var tampung = number%100;
        var angkaDepan = (number - tampung) / 100;
        if(angkaDepan === 1) {
          hasil.push("seratus");
          number -= 100;
        } else {
          for(let i = 0; i < angka.length; i++) {
            if(angkaDepan === angka[i][1]) {
              hasil.push(angka[i][0] + " ratus");
              number -= angkaDepan*100;
              break;
            }
          }
        }
      }
      if(number >= 10) {
        if(number < 20) {
            var belakang = parseInt(number.toString().charAt(1));
            for(let i = 0; i < angka.length; i++) {
              if(number === 10) {
                hasil.push("sepuluh");
                number-= 10;
                break;
              } else if(number === 11) {
                hasil.push("sebelas");
                number-=11;
                break;
              } else {
                if(belakang === angka[i][1]) {
                  hasil.push(angka[i][0] + " belas");
                  number -= belakang+10;
                  break;
                }
              }
            }
        } else {
          var tampung = number%10;
          var angkaDepan = (number - tampung) / 10;
          for(let i = 0; i < angka.length; i++) {
            if(angkaDepan === angka[i][1]) {
              hasil.push(angka[i][0] + " puluh");
              number -= angkaDepan*10;
              break;
            }
          }
        }
      }

      for(let i = 0; i < angka.length; i++) {
        if(number === angka[i][1]) {
          hasil.push(angka[i][0]);
          number-=number;
          break;
        }
      }
    }
    return hasil.join(" ");
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

// Cara 2: Recursive
function numberToWords(number) {
  // Your code here
  number = number.toString();
  if(number.length <= 0) {
    return "";
  }

  if(number.length >= 13) {
    var potong = number.length%3;
    if(potong === 0) {
      potong = 3;
    }
    var terbilangTampung = checkNumberToWords(parseInt(number.slice(0, potong))) + " triliun ";
    number = number.slice(potong);
    return terbilangTampung + numberToWords(parseInt(number));
  } else if(number.length >= 10) {
    var potong = number.length%3;
    if(potong === 0) {
      potong = 3;
    }
    var terbilangTampung = checkNumberToWords(parseInt(number.slice(0, potong))) + " milyar ";
    number = number.slice(potong);
    return terbilangTampung + numberToWords(parseInt(number));
  } else if(number.length >= 7) {
    var potong = number.length%3;
    if(potong === 0) {
      potong = 3;
    }
    var terbilangTampung = checkNumberToWords(parseInt(number.slice(0, potong))) + " juta ";
    number = number.slice(potong);
    return terbilangTampung + numberToWords(parseInt(number));
  } else if(number.length >= 4) {
    var potong = number.length%3;
    if(potong === 0) {
      potong = 3;
    }
    var terbilangTampung = checkNumberToWords(parseInt(number.slice(0, potong))) + " ribu ";
    number = number.slice(potong);
    return terbilangTampung + numberToWords(parseInt(number));
  } else {
    var terbilangTampung = checkNumberToWords(parseInt(number.slice(0, potong)));
    return terbilangTampung;
  }

  function checkNumberToWords(number) {
    // Your code here
    let angka1 = ["sembilan", "delapan", "tujuh", "enam", "lima", "empat", "tiga", "dua", "satu", ""];
    let angka2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    if(number < 10) {
      var index = angka2.indexOf(number);
      return angka1[index];
    }

    var hasil = [];
    if(number >= 100) {
      var tampung = number%100;
      var angkaDepan = (number - tampung) / 100;
      if(angkaDepan === 1) {
        return "seratus " + checkNumberToWords(number-100);
      } else {
        var index = angka2.indexOf(angkaDepan);
        number -= angkaDepan*100;
        return angka1[index] + " ratus " + checkNumberToWords(number);
      }
    }

    if(number >= 10) {
      if(number === 10) {
        return "sepuluh" + checkNumberToWords(number-10);
      } else {
        var tampung = number%10;
        var angkaDepan = (number - tampung) / 10;
        var index = angka2.indexOf(angkaDepan);
        number -= angkaDepan*10;
        return angka1[index] + " puluh " + checkNumberToWords(number);
      }
    }
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
