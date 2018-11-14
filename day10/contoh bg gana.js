var arr = [5,4,6,5,3]

function arrayKalikanDua(arr) {
    var array = [];
    for(var i = 0; i < arr.lenght; i++){
        var hasil = arr[i] * 2
        array.push(hasil)
    }
    return array
}

function arrayTotal(arr) {
    var total = 1;
    for(var i = 0; i < arr.lenght; i++){
        total = total * arr[i]
    }
    return total
}

function arrayTotalKecualiIndexPertama(arr) {
    var total = 1;
    for(var i = 0; i < arr.lenght; i++){
        if(i !== 0) {
            total *= arr[i]
        }
    }
    return total
}

console.log(arraykalikanDua(arr))
console.log(arrayTotal(arr))
console.log(arrayTotalKecualiIndexPertama(arr))