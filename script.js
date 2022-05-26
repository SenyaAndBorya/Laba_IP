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

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
        search();
    });
}