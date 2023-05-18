var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
function panggilsebelumnya(){
    
    var result = angka.join(",")
    return result
}
console.log("Sebelumnya : ",panggilsebelumnya())
function panggilascending(){
    var angka1 = angka.sort()
    return angka1.join(",")
}
console.log("Ascending : ",panggilascending())

function panggildescending(){
    var angka2 = angka.reverse()
    return angka2.join()
}
console.log("Descending : ",panggildescending())