function numberToWords(number) {
  // Your code here
  const angkaString = ['dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
  const angka = [2,3,4,5,6,7,8,9];
  const angkaPrefix = ['', 'puluh','ratus'];
  const angkaPrefix2 = ['','ribu ','juta ','miliar ','triliun '];

  let numberString = number.toString();
  let panjangNumber = numberString.length;
  while(panjangNumber > 3){
    panjangNumber = panjangNumber -3;
  }

  let pivotPotong = panjangNumber;
  let outputKonversi = "";

  if(Number.isNaN(number) == true){
    return outputKonversi;
  }

  if(numberString.length > 0 ){
    for(let i=0;i<pivotPotong;i++){

      let angkaYangDikonversi = parseInt(numberString[i]);
      if(numberString[i] != 1){
        for(let j=0;j<angka.length;j++){

          if(angka[j] == angkaYangDikonversi){
            outputKonversi = outputKonversi + angkaString[j] + ' ' + angkaPrefix[pivotPotong-1-i] + ' ' ;
          }
        }
      }
      else if(angkaYangDikonversi == 1){

        if(i == 0  && numberString.length == 4){
          outputKonversi = outputKonversi + 'se ';
        }
        else if(i == 0  && pivotPotong == 3){
          outputKonversi = outputKonversi + 'seratus ';
        }
        else if((i == 1 && pivotPotong == 3) || (i == 0 && pivotPotong == 2)){
          i++;
          angkaYangDikonversi = parseInt(numberString[i]);
          if(angkaYangDikonversi  == 0){
            outputKonversi = outputKonversi + 'sepuluh  ';
          }
          else if(angkaYangDikonversi == 1){
            outputKonversi = outputKonversi + 'sebelas  ';
          }
          else if(angkaYangDikonversi > 1){

            for(let k=0;k<angka.length;k++){

              if(angka[k] == angkaYangDikonversi){
                outputKonversi = outputKonversi + angkaString[k] + ' belas ' ;
              }
            }

          }
        }
        else if(i == pivotPotong-1){
          outputKonversi = outputKonversi + 'satu  ';
        }
      }
    }

    outputKonversi = outputKonversi.slice(0,outputKonversi.length-1);
    if(pivotPotong ==3){
      outputKonversi = outputKonversi + angkaPrefix2[Math.floor((numberString.length/3))-1] + ' ';
    }
    else if(pivotPotong <3){
      outputKonversi = outputKonversi + angkaPrefix2[Math.floor((numberString.length/3))] + ' ';
    }
    outputKonversi = outputKonversi.slice(0,outputKonversi.length-1);

    number = parseInt(numberString.slice(pivotPotong));
    return outputKonversi + numberToWords(number);

  }
}

// Driver code
console.log(numberToWords(999888000000000));
console.log(numberToWords(111111));
console.log(numberToWords(1321));

console.log(numberToWords(990));
console.log(numberToWords(91));
console.log(numberToWords(1712));

console.log('4',numberToWords(4));
console.log('27',numberToWords(27));
console.log('102',numberToWords(102));
console.log('328079',numberToWords(328079));
console.log('82102713',numberToWords(82102713));
