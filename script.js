const cart = {
    totalprice: 0,
    ProductNum: 0,
    LoveNum: 0,
    WisdomNum: 0,
    CourageNum: 0
};

function saveCart() {
    var jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart", jsonCart);
}

function loadCart() {
    var jsonCart = localStorage.getItem("cart");
    if (jsonCart) {
        var jsonCart1 = JSON.parse(jsonCart);
        Object.assign(cart, jsonCart1);
    }
}

function showCart() {
    console.log(`總價: $${cart.totalprice}`);
    console.log(`愛情的產品數量: ${cart.LoveNum}`);
    console.log(`智慧的產品數量: ${cart.WisdomNum}`);
    console.log(`勇氣的產品數量: ${cart.CourageNum}`);
}

// 在頁面加載時保持購物車狀態
window.onload = function() {
    loadCart();
    showCart();
};

// 每次更新購物車時保持狀態
function updateCart(product, price) {
    cart[product]++;
    cart.totalprice += price;
    saveCart();
    showCart();
}

// 清空購物車並保持狀態
function clearCart() {
    cart.totalprice = 0;
    cart.ProductNum = 0;
    cart.LoveNum = 0;
    cart.WisdomNum = 0;
    cart.CourageNum = 0;
    saveCart();
    console.log('已清空購物車');
    showCart();
}

