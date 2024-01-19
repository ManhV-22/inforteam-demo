// Nhập 3 cạnh tam giác a , b , c: cho biết loại tam giác là tam giác đều, cân, vuông cân, vuông, thường.
alert("Nhap cac canh cua tam giac: ");
var a = parseFloat(prompt("Nhap canh a: "));
var b = parseFloat(prompt("Nhap canh b: "));
var c = parseFloat(prompt("Nhap canh c: "));
if(a + b <= c || a + c <= b || b + c <= a){
    document.write("<h1>Khong phai 3 canh cua tam giac!!!</h1>");
}
else{
    if(a**2 + b**2 == c**2 || a**2 + c**2 == b**2 || b**2 + c**2 == a**2){
        document.write("<h1>Tam giac vuong!!!</h1>");
        if(a == b || a == c || b == c){
            document.write("<h1>Tam giac vuong can</h1>");
        }
    }
    else if(a==b==c){
        document.write("<h1>Tam giac deu!!!</h1>");
    }
    else if(a == b || a == c || b == c){
        document.write("<h1>Tam giac can</h1>");
    }
    else{
        document.write("<h1>Tam giac thuong!!!</h1>")
    }
}