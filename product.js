class item {
    constructor(name, price, information) {
        this.name = name;
        this.price = price;
        this.information = information;
    }
}

var love = new item('愛情', 99999, '買了沒用,自己去找');
var wisdom = new item('智慧', 9487, '買了沒用,自己去讀書');
var courage = new item('勇氣', 3128645, '買了沒用,不如去聽梁靜茹的勇氣');

let cart = {
    ProductNum: 0,
    LoveNum: 0,
    WisdomNum: 0,
    CourageNum: 0,
    totalprice: 0
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
    console.log(`目前商品數 : ${cart.ProductNum}`);
    console.log(`愛情: ${cart.LoveNum}`);
    console.log(`智慧: ${cart.WisdomNum}`);
    console.log(`勇氣: ${cart.CourageNum}`);
    console.log(`目前購物車總額 : $${cart.totalprice}`);
    document.querySelector('.cart_num').innerText = `${cart.ProductNum}`;
}

function updateCart(product, price) {
    cart[product]++;
    cart.totalprice += price;
    cart.ProductNum++;
    saveCart();
    showCart();
}

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

window.onload = function() {
    loadCart();
    showCart();
};