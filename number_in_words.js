function ubah(num){
var angka=[1,2,3,4,5,6,7,8,9]
var kamus=['satu ','dua ','tiga ','empat ','lima ','enam ','tujuh ','delapan ','sembilan ']
var hasil='';
for (var i = 0; i < angka.length; i++) {
  for (var j = 0; j < kamus.length; j++) {
    // if(num > 10){
    //   hasil+= kamus[j]
    }
    if(num == angka[i]){
      hasil += kamus[i]
    }else if(num/10==angka[i]){
      hasil+= kamus[i]+'puluh'
    }else if(Math.floor(num/10)!==0 && ( num%10 )== angka[i]){
      hasil+= kamus[i]+' belas'
    }
  }
return hasil;
}




console.log(ubah(4));
console.log(ubah(15))
console.log(ubah(50))
console.log(ubah(70))
console.log(ubah(90))
