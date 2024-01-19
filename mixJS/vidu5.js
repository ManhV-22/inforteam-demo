//Viết chương trình nhập điểm TB, cho biết xếp loại: giỏi, khá, trung bình, yếu.
var diemTB=parseFloat(prompt("Nhap diem trung binh: "));
if(diemTB < 4){
    document.write("Xep loai yeu!!!");
}
else if(diemTB < 6){
    document.write("Xep loai trung binh!!!");
}
else if(diemTB < 8){
    document.write("Xep loai kha!!!");
}
else if(diemTB <= 10){
    document.write("Xep loai gioi!!!");
}