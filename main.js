let currentProduct = null;

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalQty = cart.reduce((total, item) => total + item.qty, 0);
    let el = document.getElementById("cart-count");
    if (el) el.innerText = totalQty;
}

function renderProducts() {
    let box = document.getElementById("product-list");
    if (!box) return;
    box.innerHTML = products.map(p => `
        <div class="product-item" onclick="openModal(${p.id})">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>${p.price.toLocaleString()} VNĐ</p>
        </div>
    `).join('');
}

function openModal(id) {
    let p = products.find(x => x.id === id);
    if (!p) return;
    currentProduct = p;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("main-img").src = p.img;
    document.getElementById("modal-name").innerText = p.name;
    document.getElementById("modal-price").innerText = p.price.toLocaleString() + " VNĐ";
}

function closeModal() { document.getElementById("modal").style.display = "none"; }

function addToCartModal() {
    if (localStorage.getItem("login") !== "true") return alert("Vui lòng đăng nhập!");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find(x => x.id === currentProduct.id);
    item ? item.qty++ : cart.push({ id: currentProduct.id, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Đã thêm vào giỏ hàng!");
}

function buyNow() {
    addToCartModal();
    window.location.href = "cart.html";
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartCount();
});