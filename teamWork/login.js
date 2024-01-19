function checkLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === "admin" && password === "admin"){
        window.location.href = "home.html"
    }else{
        alert("Tai khoan hoac mat khau chua chinh xac!!!")
    }
}