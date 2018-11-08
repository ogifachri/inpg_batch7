function loopingAngka(angka1, angka2){
  var out=""; 
  for(var i = angka1; i <angka2; i++){
    if(i%2===0){
      out+=" genap "+i;
    } else {
      out+=" ganjil "+i;
    }
    //out+= i
  }
  return out;
   }

console.log(loopingAngka(33,99))
console.log(loopingAngka(4,25))
console.log(loopingAngka(99,122))