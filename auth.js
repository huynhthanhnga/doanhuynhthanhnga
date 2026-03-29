document.addEventListener("DOMContentLoaded", function(){

    const userArea = document.getElementById("user-area");

    if(!userArea) return;

    let isLogin = localStorage.getItem("login");

    if(isLogin === "true"){
        let email = localStorage.getItem("currentUser") || "User";

        userArea.innerText = email;
        userArea.href = "#";

        userArea.onclick = function(){
            if(confirm("Bạn muốn đăng xuất?")){
                localStorage.clear();
                location.reload();
            }
        };
    }else{
        userArea.innerText = "Đăng nhập";
        userArea.href = "login.html";
    }

});