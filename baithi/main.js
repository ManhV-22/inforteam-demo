function bangCuuChuong(){
    const number = document.getElementById('n').value;
    var table = '';
    for( var i=1; i <= number; i++){
        table += '<h2>Bang cuu chuong '+i+'</h2>';
        for(var j=1; j <= 10; j++){
            table += i +'x'+ j +'='+ (i*j) + '<br>';
        }
    }
    document.getElementById('tableOutput').innerHTML = table;
}


// function bangCuuChuong() {
//     const number = parseInt(document.getElementById('n').value, 10);
//     if (!Number.isInteger(number) || number <= 0) {
//         alert("Vui lòng nhập một số nguyên dương.");
//         return;
//     }

//     var table = '';
//     for (var i = 1; i <= number; i++) {
//         table += '<h2>Bảng cửu chương ' + i + '</h2>';
//         for (var j = 1; j <= 10; j++) {
//             table += i + 'x' + j + '=' + (i * j) + '<br>';
//         }
//     }
//     document.getElementById('tableOutput').innerHTML = table;
// }