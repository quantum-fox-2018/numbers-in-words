function numberToWords(number) {
  // Your code here
  var arrSatuan   = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh'];

  var tampung = '';
  var strNum  = String(number);

  if(number<=10){
    tampung = arrSatuan[number-1];
  } else if(number<100){
    if (Number(strNum[1])===0){
      tampung += arrSatuan[Number(strNum[0])-1] + ' puluh ';
    } else {
      tampung += arrSatuan[Number(strNum[0])-1] + ' puluh ' + arrSatuan[Number(strNum[1]-1)];
    }
  } else if(number<1000){
      if(Number(strNum[1]) === 0){
        if(Number(strNum[2]) === 0){
          tampung += arrSatuan[Number(strNum[0])-1]+' ratus ';
        } else {
          tampung += arrSatuan[Number(strNum[0])-1]+' ratus '+arrSatuan[Number(strNum[2]-1)];
        }
      } else {
        tampung += arrSatuan[Number(strNum[0])-1]+' ratus '+arrSatuan[Number(strNum[1]-1)]+' puluh '+arrSatuan[Number(strNum[2]-1)];
      }
  } else if(number<10000){
    if(Number(strNum[1]) === 0){
      if(Number(strNum[2]) === 0){
        if(Number(strNum[3]) === 0){
          tampung += arrSatuan[Number(strNum[0])-1]+' ribu ';
        } else {
          tampung += arrSatuan[Number(strNum[0])-1]+' ribu '+ arrSatuan[Number(strNum[3]-1)];
        }
      } else {
        tampung += arrSatuan[Number(strNum[0])-1]+' ribu '+ arrSatuan[Number(strNum[2]-1)]+' puluh '+arrSatuan[Number(strNum[3]-1)];
      }
    } else {
      tampung += arrSatuan[Number(strNum[0])-1]+' ribu '+arrSatuan[Number(strNum[1])-1]+' ratus '+arrSatuan[Number(strNum[2]-1)]+' puluh '+arrSatuan[Number(strNum[3]-1)];
    }
  }

  return tampung;
}


// Driver code
function numberToWords(number) {
  // Your code here
  var arrSatuan   = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh'];

  var tampung = '';
  var strNum  = String(number);

  if(number<=10){
    tampung = arrSatuan[number-1];
  } else if(number<100){
    if (Number(strNum[1])===0){
      tampung += arrSatuan[Number(strNum[0])-1] + ' puluh ';
    } else {
      tampung += arrSatuan[Number(strNum[0])-1] + ' puluh ' + arrSatuan[Number(strNum[1]-1)];
    }
  } else if(number<1000){
      if(Number(strNum[1]) === 0){
        if(Number(strNum[2]) === 0){
          tampung += arrSatuan[Number(strNum[0])-1]+' ratus ';
        } else {
          tampung += arrSatuan[Number(strNum[0])-1]+' ratus '+arrSatuan[Number(strNum[2]-1)];
        }
      } else {
        tampung += arrSatuan[Number(strNum[0])-1]+' ratus '+arrSatuan[Number(strNum[1]-1)]+' puluh '+arrSatuan[Number(strNum[2]-1)];
      }
  } else if(number<10000){
    if(Number(strNum[1]) === 0){
      if(Number(strNum[2]) === 0){
        if(Number(strNum[3]) === 0){
          tampung += arrSatuan[Number(strNum[0])-1]+' ribu ';
        } else {
          tampung += arrSatuan[Number(strNum[0])-1]+' ribu '+ arrSatuan[Number(strNum[3]-1)];
        }
      } else {
        tampung += arrSatuan[Number(strNum[0])-1]+' ribu '+ arrSatuan[Number(strNum[2]-1)]+' puluh '+arrSatuan[Number(strNum[3]-1)];
      }
    } else {
      tampung += arrSatuan[Number(strNum[0])-1]+' ribu '+arrSatuan[Number(strNum[1])-1]+' ratus '+arrSatuan[Number(strNum[2]-1)]+' puluh '+arrSatuan[Number(strNum[3]-1)];
    }
  }

  return tampung;
}


// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(4));
console.log(numberToWords(999));
console.log(numberToWords(9999));
