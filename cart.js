function renderCart() {
    let box = document.getElementById("cart-container");
    let totalEl = document.getElementById("total");
    if (!box) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    box.innerHTML = "";
    let totalMoney = 0;

    if (cart.length === 0) {
        box.innerHTML = "<h3>Giỏ hàng của bạn đang trống</h3>";
        if (totalEl) totalEl.innerText = "0";
        return;
    }

    cart.forEach((item, index) => {
        let p = products.find(x => x.id === item.id);
        if (p) {
            let sum = p.price * item.qty;
            totalMoney += sum;
            box.innerHTML += `
            <div class="cart-item">
                <img src="${p.img}" width="80">
                <div style="flex:1; margin-left: 20px;">
                    <h4>${p.name}</h4>
                    <p style="color:red">${p.price.toLocaleString()} VNĐ</p>
                    <div class="qty-controls">
                        <button onclick="updateQty(${index}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="updateQty(${index}, 1)">+</button>
                    </div>
                </div>
                <p><b>${sum.toLocaleString()} VNĐ</b></p>
            </div>`;
        }
    });
    if (totalEl) totalEl.innerText = totalMoney.toLocaleString();
}

function updateQty(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].qty += change;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function checkout() { document.getElementById("payment-modal").style.display = "flex"; }
function closePayment() { document.getElementById("payment-modal").style.display = "none"; }

document.addEventListener("DOMContentLoaded", renderCart);