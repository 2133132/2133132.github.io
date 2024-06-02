class item{
    constructor(name,price,information){
        this.name=name;
        this.price=price;
        this.information=information;
    }
};

var love = new item('愛情',99999,'買了沒用,自己去找');
var wisdom = new item('智慧',9487,'買了沒用,自己去讀書');
var courage = new item('勇氣',3128645,'買了沒用,不如去聽梁靜茹的勇氣');

let cart= {
    ProductNum:0,
    LoveNum: 0,
    WisdomNum: 0,
    CourageNum: 0,
    totalprice: 0
};

function showCart(){
    console.log(`目前商品數 : ${cart.ProductNum}`);
    console.log(`愛情: ${cart.LoveNum}`);
    console.log(`智慧: ${cart.WisdomNum}`);
    console.log(`勇氣: ${cart.CourageNum}`);
    console.log(`目前購物車總額 : $${cart.totalprice}`);
};

