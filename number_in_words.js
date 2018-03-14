function numberToWords(number) {
  // Your code here
  let numWords = [[1, 'satu', 'se'],
              [2, 'dua'], [3, 'tiga'],
              [4, 'empat'], [5, 'lima'],
              [6, 'enam'], [7, 'tujuh'],
              [8, 'delapan'], [9, 'sembilan']];
  let arrNom = [[2, 'puluh', 'belas'], [3, 'ratus'], [4, 'ribu']];

  let num = parseInt(number);
  let numStr = number.toString();
  let result ='';
  let kata = '';
  let pembilang='';
// console.log(num);

  if(numStr.length === 1 && num > 0){
    for(let i=0; i<numWords.length; i++){
      if(num === numWords[i][0]){
        return numWords[i][1];
      }
    }
  }else if(numStr === '0'){
    return ''
  }

  for(let j=arrNom.length-1; j>=0; j--){
    // if(numStr.length == 2){
    //   if(numStr === '11'){
    //     pembilang = arrNom[j][2];
    //     kata = numWords[1][2] + pembilang;
    //     result = result + kata ;
    //     return result;
    //
    //   }else if(numStr.charAt(0) ==='1'){
    //     pembilang = arrNom[j][2];
    //   }else {
    //     pembilang = arrNom[j][2];
    //   }
    // }
    if(numStr.length === arrNom[j][0]){
      if(numStr.charAt(0) == 0){
        result = result + '';
        return result + numberToWords(numStr.slice(1))
      }
      for(let k=0; k<numWords.length; k++){
        if(numStr.charAt(0) == numWords[k][0]){
          result = result + numWords[k][1] + ' ' + arrNom[j][1] +' ';
          return result + numberToWords(numStr.slice(1))
        }
      }
    }
  }


}

// Driver code
console.log(numberToWords('711'));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
