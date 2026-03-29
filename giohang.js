function displayCart() {
    // 1. Lấy dữ liệu từ localStorage
    const cart = JSON.parse(localStorage.getItem('vntravel_cart')) || [];
    const cartContainer = document.getElementById('cart-content');
    const totalContainer = document.getElementById('cart-summary');

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p style='text-align:center; padding: 20px;'>Giỏ hàng của bạn đang trống.</p>";
        totalContainer.innerHTML = "Tổng tiền: 0đ";
        return;
    }

    // 2. Vẽ giao diện danh sách tour
    let html = "";
    let grandTotal = 0;

    cart.forEach((item, index) => {
        grandTotal += item.total;
        html += `
            <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid #eee; background: #fff; margin-bottom: 10px; border-radius: 8px;">
                <div>
                    <h4 style="margin: 0; color: #333;">${item.name}</h4>
                    <small>Ngày: ${item.date} | SL: ${item.quantity}</small>
                </div>
                <div style="text-align: right;">
                    <p style="margin: 0; font-weight: bold; color: #ff4d4d;">${item.total.toLocaleString()}đ</p>
                    <button onclick="deleteItem(${index})" style="color: #999; border: none; background: none; cursor: pointer; font-size: 0.8rem;">Xóa</button>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
    <span>SL: </span>
    <button onclick="updateQuantity(${index}, -1)" style="padding: 2px 8px; cursor: pointer;">-</button>
    <span style="font-weight: bold;">${item.quantity}</span>
    <button onclick="updateQuantity(${index}, 1)" style="padding: 2px 8px; cursor: pointer;">+</button>
</div>
            </div>
        `;
        
    


    });

    cartContainer.innerHTML = html;
    totalContainer.innerHTML = `<h3>Tổng cộng: ${grandTotal.toLocaleString()}đ</h3>`;
}


const checkoutBtn = document.querySelector('.cta-btn');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        let cart = JSON.parse(localStorage.getItem('vntravel_cart')) || [];
        
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống!");
            return;
        }

        // 1. Tạo mã đơn hàng gồm 8 số ngẫu nhiên
        const orderId = Math.floor(10000000 + Math.random() * 90000000);

        // 2. Lấy ngày giờ thanh toán hiện tại
        const orderDate = new Date().toLocaleString('vi-VN');

        // 3. Tính tổng tiền cuối cùng của cả đơn hàng
        const finalTotal = cart.reduce((sum, item) => sum + item.total, 0);

        // 4. Tạo đối tượng đơn hàng hoàn chỉnh
        const orderData = {
            id: orderId,
            date: orderDate,
            items: cart,
            totalAmount: finalTotal
        };

        // 5. Lưu vào localStorage với key mới là 'vntravel_order'
        localStorage.setItem('vntravel_order', JSON.stringify(orderData));

        // 6. Xóa giỏ hàng sau khi đã đặt hàng thành công
        localStorage.removeItem('vntravel_cart');

        alert("Đặt hàng thành công! Đang chuyển đến trang đơn hàng.");
        window.location.href = "donhang.html";
    });
}
// Hàm xóa sản phẩm
// Hàm xóa từng sản phẩm
function deleteItem(index) {
    // 1. Hiển thị hộp thoại xác nhận
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa tour này khỏi giỏ hàng?");

    if (confirmDelete) {
        // 2. Nếu đồng ý, tiến hành lấy dữ liệu và xóa
        let cart = JSON.parse(localStorage.getItem('vntravel_cart')) || [];
        
        // Xóa 1 phần tử tại vị trí index
        cart.splice(index, 1); 

        // 3. Cập nhật lại localStorage
        localStorage.setItem('vntravel_cart', JSON.stringify(cart));

        // 4. Vẽ lại giao diện ngay lập tức
        displayCart(); 
        
        // Thông báo nhẹ cho người dùng (tùy chọn)
        console.log("Đã xóa sản phẩm thành công");
    }
}


// Lấy thẻ button xóa tất cả
const clearBtn = document.getElementById('clear-cart');

if (clearBtn) {
    clearBtn.addEventListener('click', function() {
        // Hỏi xác nhận trước khi xóa để tránh bấm nhầm
        const confirmClear = confirm("Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng không?");
        
        if (confirmClear) {
            // 1. Xóa dữ liệu trong localStorage (đúng với tên key bạn đã đặt)
            localStorage.removeItem('vntravel_cart');

            // 2. Thông báo và tải lại trang để cập nhật giao diện trống
            alert("Đã xóa toàn bộ giỏ hàng!");
            location.reload(); 
        }
    });
}
// Chạy hàm khi trang web tải xong
document.addEventListener('DOMContentLoaded', displayCart);


// Hàm cập nhật số lượng
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('vntravel_cart')) || [];
    
    // 1. Thay đổi số lượng
    cart[index].quantity = parseInt(cart[index].quantity) + change;

    // 2. Kiểm tra nếu số lượng < 1 thì không cho giảm tiếp (hoặc hỏi xóa)
    if (cart[index].quantity < 1) {
        deleteItem(index); // Gọi hàm xóa bạn đã viết nếu giảm xuống 0
        return;
    }

    // 3. Cập nhật lại tổng tiền của tour đó (total = giá 1 người * số lượng mới)
    cart[index].total = cart[index].price * cart[index].quantity;

    // 4. Lưu lại vào localStorage và vẽ lại giao diện
    localStorage.setItem('vntravel_cart', JSON.stringify(cart));
    displayCart();
}


