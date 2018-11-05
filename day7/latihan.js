var name = "aaa";
var age = 16;   
var money = 400000;

if (name === "") {
    console.log("Anda tidak boleh masuk!")
} else {
  if (age < 17) {
    var juice = 50000;
    if (money < juice) {
      console.log("Uang Tidak cukup. Anda harus pulang")        
    } else {
      var sisa = money - juice;
      console.log("Anda bisa pesan minum. Sisa uang anda " + sisa)
    }
  } else {
    if (age > 17)
      var anggur = 300000;
    if (money < anggur) {
      console.log("Uang tidak cukup. Anda harus pulang")
    } else {
      var sisa = money - anggur;
      console.log("Anda bisa pesan minum. Sisa uang anda " + sisa)
    }
  }
}