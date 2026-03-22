// Hiệu ứng đổi màu Navbar khi cuộn chuột
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#fff";
        navbar.style.padding = "10px 10%";
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.padding = "20px 10%";
    }
});





// đăng nhập
// Lấy các thành phần
const modal = document.getElementById("loginModal");
const loginBtn = document.querySelector(".btn-contact"); // Nút Đăng nhập trên Navbar
const closeBtn = document.querySelector(".close-modal");

// Mở modal khi bấm nút Đăng nhập
loginBtn.onclick = function(e) {
    e.preventDefault(); // Ngăn trang web nhảy lên đầu
    modal.style.display = "block";
}

// Đóng modal khi bấm vào dấu x
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Đóng modal khi bấm ra ngoài vùng trắng
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

