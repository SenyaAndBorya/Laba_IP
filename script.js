function notReadyAlert() {
    alert('Sorry, not ready yet!\nИзвините, ещё не готово!');
    return false;
}
function search() {

    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'краска') {
        productNumber = 0;    
    } else if (name == 'кисти') {
        productNumber = 1;
    } else if (name == 'палитра') {
        productNumber = 2;
    } else {
        alert('Товар не найден');
    }
    
    let cards = document.getElementsByClassName('card');
    let card =  cards[productNumber];
    card.style.border = '1px dashed lightgreen';
    card.style.backgroundColor = 'lightblue';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}

function resize(img, x, y) {
    img.style.width = x + 'px';
    img.style.height = y + 'px';
}

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';

    let items = [
        {href: 'index.html', text: 'Товары'},
        {href: '', text: 'Контакты'},
        {href: '', text: 'Доставка'},
        {href: '', text: 'Акции'},
        {href: '', text: 'О нас'},
        {href: '', text: 'Наша миссия'},
    ]

    for(let i = 0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}

function generateProducts() {
    let products = document.querySelector('main');
    products.innerHTML = '';

    let items = [
        {img: 'paint.jpg', productName: 'Акриловая краска "Pebeo', price: 300},
        {img: 'brush.jpg', productName: 'Художественные кисти для рисования синтетика "Гамма" 5 шт', price: 520},
        {img: 'palitra.jpg', productName: 'Художественная палитра', price: 50},
        {img: 'palitra.jpg', productName: 'Ножницы', price: 90},
    ]

    for(let i = 0; i<items.length; i++) {
        let div = document.createElement('div');
        div.className = "card";
        div.innerHTML = `
            <a href="product.html">
                <div class="image"><img src="${items[i].img}"></div>
                <div class="product-name">${items[i].productName}</div>
                <div class="price">${items[i].price} &#8381</div>
            </a>`;
        products.append(div);
    }
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
        search();
    });

    generateMenu();
    generateProducts();
}