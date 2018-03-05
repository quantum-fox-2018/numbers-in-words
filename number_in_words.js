function numberToWords(number) {
  var words = [{
    num:1,
    word:'satu'
  },{
    num:2,
    word:'dua'
  },{
    num:3,
    word:'tiga'
  },{
    num:4,
    word:'empat'
  },{
    num:5,
    word:'lima'
  },{
    num:6,
    word:'enam'
  },{
    num:7,
    word:'tujuh'
  },{
    num:8,
    word:'delapan'
  },{
    num:9,
    word:'sembilan'
  },{
    num:10,
    word:'sepuluh'
  },{
    num:11,
    word:'sebelas'
  },{
    num:12,
    word:'dua belas'
  },{
    num:13,
    word:'tiga belas'
  },{
    num:14,
    word:'empat belas'
  },{
    num:15,
    word:'lima belas'
  },{
    num:16,
    word:'enam belas'
  },{
    num:17,
    word:'tujuh belas'
  },{
    num:18,
    word:'delapan belas'
  },{
    num:19,
    word:'sembilan belas'
  },{
    num:100,
    word:'seratus'
  },{
    num:1000,
    word:'seribu'
  }];
  var divider = [{
    num:10,
    word:'puluh'
  },{
    num:100,
    word:'ratus'
  },{
    num:1000,
    word:'ribu'
  },{
    num:1000000,
    word:'juta'
  },{
    num:1000000000,
    word:'milyar'
  },{
    num:1000000000000,
    word:'trilyun'
  }];
  var result = '';
  if(number == 0){
    return result;
  } else {
    for(let i=words.length-1; i>=0; i--){
      if(number==words[i].num){
        return words[i].word;
      }
    }
    for(let j=divider.length-1; j>=0; j--){
      if(number>=divider[j].num){
        var divide = Math.floor(number / divider[j].num);
        var modulus = number % divider[j].num;
        var substitute = divider[j].word;
        break;
      }
    }
    if((divide==1 && substitute=='ratus') || (divide==1 && substitute=='ribu')){
      return `se${substitute} ${numberToWords(modulus)}`;
    } else {
      if(divide>19){
        return `${numberToWords(divide)} ${substitute} ${numberToWords(modulus)}`;
      } else {
        for(let k=words.length-1; k>=0; k--){
          if(divide==words[k].num){
            return `${words[k].word} ${substitute} ${numberToWords(modulus)}`;
          }
        }
      }
    }
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(141412));
console.log(numberToWords(2011845));
