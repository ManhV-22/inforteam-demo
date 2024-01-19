// Viết chương trình giải và biện luận phương trình bậc 2.
alert("Nhap he so cho phuong trinh ax^2 + bx + c = 0");
var x, x1, x2;
var a=prompt("Nhap he so a: ");
var b=prompt("Nhap he so b: ");
var c=prompt("Nhap he so c: ");
if(a==0){
    if(b==0){
        if(c==0){
            document.write("<h1>Phuong trinh cho vo so nghiem!!!</h1>")
        }
        else{
            document.write("<h1>Phuong trinh cho vo nghiem!!!")
        }
    }
    else if(b!=0) {
        x = -c/b;
        document.write("<h1>Phuong trinh cho co nghiem x = "+(x)+"</h1>")
    }
}
else if(a!=0) {
    let delta= Math.pow(b, 2) - 4*a*c;
    if(delta<=0){
        document.write("<h1>Phuong trinh cho vo nghiem!!!</h1>")
    }
    else if(delta==0){
        x = -b/(2*a);
        document.write("<h1>Phuong trinh co nghiem kep x1 = x2 = "+x+"</h1>");
    }
    else{
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
        document.write("<h1>Phuong trinh cho co 2 nghiem phan biet: x1 = "+x1+", x2 = "+x2+"</h1>");
    }
}