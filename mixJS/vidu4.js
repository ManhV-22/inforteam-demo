// Viết chương trình kiểm tra ngày, tháng, năm có hợp lệ?
alert("Nhap cac gia tri sau: ");
var day=prompt("Nhap ngay: ");
var month=prompt("Nhap thang: ");
var year=prompt("Nhap nam: ");
if(month <= 0 || month > 12){
    document.write("<h1>Gia tri khong hop le!!!</h1>");
}
else{
    if(month == 1 || month==3 || month== 5 || month==7 || month==8 || month==10 || month== 12){
        if(day <= 0 || day > 31){
            document.write("<h1>Gia tri khong hop le!!!</h1>");
        }
        else{
            document.write("<h1>Ngay thang nam hop le!!!</h1>");
        }
    }
    else if(month==2){
        if(year%4 == 0 && year%100 != 0){
            if(day <= 0 || day > 29){
                document.write("Ngay khong hop le!!!");
            }
            else{
                document.write("<h1>Ngay thang nam hop le</h1>");
            }
        }
        else{
            if(day <= 0 || day > 28){
                document.write("Ngay thang nam khong hop le!!!");
            }
            else{
                document.write("Ngay thang nam hop le!!!");
            }
        }
    }
    else{
        if(day <= 0 || day > 30){
            document.write("Ngay thang nam khong hop le!!!");
        }
        else{
            document.write("Ngay thang nam hop le!!!");
        }
    }
}