document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy dữ liệu đơn hàng từ localStorage
    const orderData = JSON.parse(localStorage.getItem('vntravel_order'));

    if (!orderData) {
        document.querySelector('.order-container').innerHTML = "<h2>Không tìm thấy thông tin đơn hàng!</h2>";
        return;
    }

    // 2. Hiển thị thông tin chung
    document.getElementById('order-id').innerText = "#" + orderData.id;
    document.getElementById('order-date').innerText = orderData.date;
    document.getElementById('order-total').innerText = orderData.totalAmount.toLocaleString();

    // 3. Hiển thị danh sách các tour đã đặt
    const listContainer = document.getElementById('order-items-list');
    let html = "";

    orderData.items.forEach(item => {
        html += `
            <div class="order-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>Ngày: ${item.date} | SL: ${item.quantity}</small>
                </div>
                <div>${item.total.toLocaleString()}đ</div>
            </div>
        `;
    });

    listContainer.innerHTML = html;
});