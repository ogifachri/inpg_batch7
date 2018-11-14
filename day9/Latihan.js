//Buat array angka 1-100
//Buat Ganjil Genap
function iterationNumber(angkaAwal,angkaAkhir) {
    var arr=[];
    for(var i=angkaAwal; i<=angkaAkhir; i++) {
        if(i%2===0) {
            arr.push(i+ "= Genap");
        } else {
            arr.push(i+ "= Ganjil");
        }
    }
    return arr;
}
console.log(iterationNumber(1,100))

// Buat array 1-30
// Jika angka habis dibagi 3 cetak "KAS"
// Jika angka habis dibagi 6 cetak "KUS"
// Jika angka habis dibagi 15 cetak "KASKUS"
function kaskus() {
    var arr=[];
    for(i=1; i<=30; i++) {
        if(i%15===0) {
            arr.push("Kaskus");
        } else if(i%6===0) {
            arr.push("Kus");
        } else if(i%3===0) {
            arr.push("Kas");
        } else {
            arr.push(i)
        }
    }
    return arr;
}
console.log(kaskus());