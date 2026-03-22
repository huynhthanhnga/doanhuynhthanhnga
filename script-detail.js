// JavaScript sẽ lấy mã ID từ thanh địa chỉ, 
 //sau đó đối chiếu vào đối tượng const destinations để lấy tên, ảnh, 
 //giá tiền tương ứng và "đổ" (render) vào các thẻ HTML trống.





// 1. Khai báo dữ liệu các địa điểm
const destinations = {
    'halong': {
        title: "Vịnh Hạ Long - Quảng Ninh",
        tagline: "Kỳ quan thiên nhiên thế giới",
        img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200",
        location: "📍 Quảng Ninh, Việt Nam",
        desc: "Vịnh Hạ Long nổi tiếng với hệ thống đảo đá vôi và hang động kỳ vĩ. Trải nghiệm du thuyền giữa lòng kỳ quan là một điều không thể bỏ lỡ.",
        price: "2.500.000đ"
    },
    'hoian': {
        title: "Phố Cổ Hội An - Quảng Nam",
        tagline: "Vẻ đẹp hoài cổ bên dòng sông Hoài",
        img: "https://images.vietnamtourism.gov.vn/vn/images/2019/Hoiantown.jpg",
        location: "📍 Quảng Nam, Việt Nam",
        desc: "Hội An là nơi giao thoa văn hóa đặc sắc. Buổi đêm, thành phố rực rỡ với hàng ngàn ánh đèn lồng thủ công và những con phố đi bộ yên bình.",
        price: "1.200.000đ"
    },
    'sapa': {
        title: "Sapa - Lào Cai",
        tagline: "Thành phố trong sương",
        img: "https://resource.kinhtedothi.vn/resources2025/1/users/299/laocai1-1743590404.jpg",
        location: "📍 Lào Cai, Việt Nam",
        desc: "Sapa quyến rũ du khách bởi những thửa ruộng bậc thang bát ngát, đỉnh Fansipan huyền thoại và văn hóa các dân tộc thiểu số độc đáo.",
        price: "1.800.000đ"
    },
    'danang': {
        title: "Đà Nẵng - Thành phố đáng sống",
        tagline: "Bãi biển Mỹ Khê & Cầu Vàng",
        img: "https://duonggiahotel.vn/wp-content/uploads/2022/03/da-nang-5242.jpg",
        location: "📍 Đà Nẵng, Việt Nam",
        desc: "Khám phá Bà Nà Hills với Cầu Vàng nổi tiếng, tắm biển Mỹ Khê và thưởng thức hải sản tươi sống cùng các màn trình diễn ánh sáng tại Cầu Rồng.",
        price: "2.100.000đ"
    },

    'phuquoc': {
        title: "Đảo Ngọc Phú Quốc",
        tagline: "Thiên đường nghỉ dưỡng nhiệt đới",
        img: "https://cdn3.ivivu.com/2025/02/phu-quoc-ivivu1.jpg",
        location: "📍 Kiên Giang, Việt Nam",
        desc: "Phú Quốc sở hữu những bãi biển đẹp nhất Việt Nam như Bãi Sao, Bãi Dài. Nơi đây lý tưởng cho các hoạt động lặn ngắm san hô và nghỉ dưỡng cao cấp.",
        price: "3.500.000đ"
    },
    'ninhbinh': {
        title: "Ninh Bình - Tràng An",
        tagline: "Hạ Long trên cạn",
        img: "https://bizweb.dktcdn.net/100/474/438/files/tong-quan-ve-ninh-binh-2-ace0f918-c46f-4cc6-85c1-07414fc3a086.png?v=1760608769451",
        location: "📍 Ninh Bình, Việt Nam",
        desc: "Quần thể danh thắng Tràng An với hệ thống núi đá vôi và hang động xuyên thủy kỳ ảo, cùng di tích lịch sử cố đô Hoa Lư hào hùng.",
        price: "1.500.000đ"
    },
    'hue': {
        title: "Cố Đô Huế",
        tagline: "Di sản văn hóa triều Nguyễn",
        img: "https://bizweb.dktcdn.net/100/006/093/files/co-do-hue-6.jpg?v=1712808730086",
        location: "📍 Thừa Thiên Huế, Việt Nam",
        desc: "Ngược dòng thời gian về với Kinh Thành Huế cổ kính, tham quan các lăng tẩm uy nghi và thưởng thức nhã nhạc cung đình trên dòng sông Hương.",
        price: "1.400.000đ"
    }
};

// 2. Lấy ID từ URL (ví dụ: id=hoian)
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// 3. Đổ dữ liệu vào HTML
if (destinations[id]) {
    const data = destinations[id];
    document.querySelector('.main-img').src = data.img;
    document.querySelector('h1').innerText = data.title;
    document.querySelector('.tagline').innerText = data.tagline;
    document.querySelector('.meta span').innerText = data.location;
    document.querySelector('.description p').innerText = data.desc;
    document.querySelector('.price').innerText = "Từ " + data.price + " / khách";
    document.title = data.title + " - VN Travel";
} else {
    // Nếu không tìm thấy ID, quay về trang chủ
    window.location.href = "index.html";
}











// Đảm bảo nút đặt chỗ của bạn có id="btn-add-cart" 
// hoặc sửa selector cho đúng
const btnAddCart = document.querySelector('.cta-btn'); 

btnAddCart.addEventListener('click', function(e) {
    e.preventDefault(); // Chặn việc load lại trang

    // 1. Lấy thông tin từ giao diện
    const tourName = document.querySelector('.info-box h1').innerText;
    const bookDate = document.getElementById('book-date')?.value || "Chưa chọn ngày";
    const people = document.getElementById('book-people')?.value || 1;
    // Lấy giá tiền (loại bỏ chữ 'đ' và dấu chấm để thành số)
    const priceText = document.querySelector('.price').innerText;
    const price = parseInt(priceText.replace(/[^0-9]/g, ''));

    // 2. Tạo đối tượng tour mới
    const newOrder = {
        id: Date.now(), // Tạo ID duy nhất bằng thời gian
        name: tourName,
        date: bookDate,
        quantity: people,
        price: price,
        total: price * people
    };

    // 3. Lưu vào localStorage
    // Lấy giỏ hàng cũ về, nếu chưa có thì tạo mảng rỗng
    let cart = JSON.parse(localStorage.getItem('vntravel_cart')) || [];
    
    // Thêm tour mới vào mảng
    cart.push(newOrder);
    
    // Lưu lại mảng mới vào localStorage
    localStorage.setItem('vntravel_cart', JSON.stringify(cart));

    // 4. Thông báo và chuyển hướng (tùy chọn)
    alert("Đã thêm tour vào giỏ hàng thành công!");
    window.location.href = "giohang.html"; 
});
