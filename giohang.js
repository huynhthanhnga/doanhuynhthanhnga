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
            </div>
        `;
    });

    cartContainer.innerHTML = html;
    totalContainer.innerHTML = `<h3>Tổng cộng: ${grandTotal.toLocaleString()}đ</h3>`;
}

// Hàm xóa sản phẩm
function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem('vntravel_cart')) || [];
    cart.splice(index, 1); // Xóa 1 phần tử tại vị trí index
    localStorage.setItem('vntravel_cart', JSON.stringify(cart));
    displayCart(); // Vẽ lại giao diện
}

// Chạy hàm khi trang web tải xong
document.addEventListener('DOMContentLoaded', displayCart);