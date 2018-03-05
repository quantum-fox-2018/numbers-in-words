function convertToString (number){

  var angkaString = ['satu','dua','tiga','empat','lima','enam', 'tujuh', 'delapan', 'sembilan'];
  var angkaStringSpecial = ['seratus','seribu','sejuta'];
  var angkaPrefix = ['','puluh','ratus'];
  var angkaPrefix2 = ['','ribu','juta'];
  var angka = [1,2,3,4,5,6,7,8,9];
  var angkaSpecial = [100,1000,1000000];
  var angkaBelas = [10,11,12,13,14,15,16,17,18,19];
  var stringBelas = ['sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas'];
  var pembagi = [1,10,100];
  var pengurang =1;
  var result = '';
  var hasilKurang = 0;
  var countPrefix = 0;

  var numberString = number.toString();
  var panjangNumber = numberString;

  if(numberString.length>0 && number>0){
    pengurang = parseInt(numberString[0])* (Math.pow(10,numberString.length-1));
    hasilKurang = number - pengurang;

    for(var i=0;i<angkaSpecial.length;i++){

      if(pengurang == angkaSpecial[i]){
        return result + angkaStringSpecial[i] + ' ' + convertToString(hasilKurang);
      }
    }

    for(var i=0;i<angkaBelas.length;i++){

      if(number == angkaBelas[i]){
        return result + stringBelas[i] + ' ' + convertToString(0);
      }
    }



    if( parseInt(numberString[0]+numberString[1])>=11 && parseInt(numberString[0]+numberString[1])<=19){
      return result + stringBelas[0] + ' ' + convertToString(hasilKurang) ;
    }

    for(var i=0;i<angkaString.length;i++){

      if(angka[i] == parseInt(numberString[0])){

        if(numberString.length<= 2){

          if(numberString.length>0){
            return result + angkaString[i] + ' ' + angkaPrefix[numberString.length-1] + ' ' + convertToString(hasilKurang);
          }
          else if(panjangNumber==0){
            return result + angkaString[i] + ' ' + convertToString(hasilKurang);
          }
        }
        else{
          while(panjangNumber>2){
            countPrefix++;
            panjangNumber = panjangNumber - 3;
          }
          panjangNumber = panjangNumber +3;

          if(panjangNumber>0){
            return result + angkaString[i] + ' ' + angkaPrefix[numberString.length-1] + ' ' + convertToString(hasilKurang);
          }
          else if(panjangNumber==0){
            return result + angkaString[i] + ' ' + angkaPrefix2[countPrefix] + ' ' + convertToString(hasilKurang);
          }

        }
      }

    }
  }

  else{
    return result;
  }
}

console.log('4',convertToString(4));
console.log('27',convertToString(27));
console.log('102',convertToString(102));
console.log('328079',convertToString(328079));
console.log(convertToString(82102713));
