function numberToWords(number) {
  const numberTerbilang = [
  {value: "1", label: "satu"},
  {value: "2", label: "dua"},
  {value: "3", label: "tiga"},
  {value: "4", label: "empat"},
  {value: "5", label: "lima"},
  {value: "6", label: "enam"},
  {value: "7", label: "tujuh"},
  {value: "8", label: "delapan"},
  {value: "9", label: "sembilan"},
  {value: "10", label: "sepuluh"},
  {value: "11", label: "sebelas"},
  {value: "12", label: "dua belas"},
  {value: "13", label: "tiga belas"},
  {value: "14", label: "empat belas"},
  {value: "15", label: "lima belas"},
  {value: "16", label: "enam belas"},
  {value: "17", label: "tujuh belas"},
  {value: "18", label: "delapan belas"},
  {value: "19", label: "sembilan belas"}
];

const kelipatan = [
  {value: 6, label: "juta"},
  {value: 3, label: "ribu"},
  {value: 2, label: "ratus"},
  {value: 1, label: "puluh"},
  {value: "", label: ""}
];

function switchWord(number){
  for (var i = 0; i < numberTerbilang.length; i++) {
    if (number === numberTerbilang[i].value) {
      return numberTerbilang[i].label;
    }
  }
}

function getKelipatan(value){
  for (var i = 0; i < kelipatan.length; i++) {
    if (kelipatan[i].value === value) {
      return kelipatan[i].label;
    }
  }
}

function numberToWords(number) {
  var result = "";
  number = number.toString();
  var digit = number.length % 3;
  var bilanganInti = "";
  var bilanganSisa = "";

  var sisa = Number(number);

  if (digit === 1) {
    bilanganInti = number.substr(0,1)
    bilanganSisa = number.substring(1, number.length)
  }else if(digit === 2){
    bilanganInti = number.substr(0,2)
    bilanganSisa = number.substring(2, number.length)
  }else if(digit === 0){
    bilanganInti = number.substr(0,3)
    bilanganSisa = number.substring(3, number.length)
  }

  sisa -= bilanganInti*Math.pow(10, bilanganSisa.length)
  if (bilanganInti > 19) {
    result +=  numberToWords(bilanganInti) + " ";
    result += getKelipatan(bilanganSisa) + " ";
  }else{
    result += switchWord(bilanganInti) + " ";
    result += getKelipatan(bilanganSisa) + " ";
  }

  return result + " " + numberToWords(sisa);
}


// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
