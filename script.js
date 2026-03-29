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











// người sáng lập
// Lấy các phần tử
var founderModal = document.getElementById("founderModal");
var closeFounder = document.getElementsByClassName("close-founder")[0];

// Hàm để mở Modal (Bạn có thể gắn hàm này vào nút "Liên hệ" hoặc tạo nút mới)
function openFounder() {
    founderModal.style.display = "block";
}

// Đóng modal khi ấn nút X
closeFounder.onclick = function() {
    founderModal.style.display = "none";
}

// Đóng modal khi ấn ra ngoài vùng nội dung
window.onclick = function(event) {
    if (event.target == founderModal) {
        founderModal.style.display = "none";
    }
}





/* Giao diện mặc định (Ẩn nút 3 gạch trên máy tính) */
.menu-toggle {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    transition: 0.3s;
}

/* Khi màn hình nhỏ hơn 768px (Điện thoại) */
@media screen and (max-width: 768px) {
    .menu-toggle {
        display: flex; /* Hiện nút 3 gạch */
    }

    .nav-links {
        display: none; /* Ẩn menu mặc định */
        flex-direction: column;
        position: absolute;
        top: 60px; /* Độ cao của navbar */
        right: 0;
        background: white;
        width: 100%;
        text-align: center;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        z-index: 1000;
    }

    .nav-links.active {
        display: flex; /* Hiện menu khi bấm vào 3 gạch */
    }

    .nav-links li {
        padding: 15px 0;
    }
}