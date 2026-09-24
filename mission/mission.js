let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#222222';
        const title = document.querySelector('h1');
        title.style.color = "white";
        const para = document.querySelector('main');
        para.style.color = 'white';
        const image = document.querySelector('img');
        image.setAttribute('src', 'byui-logo-white.png');
    } else {
        document.body.style.backgroundColor = 'white';
        const title = document.querySelector('h1');
        title.style.color = "black";
        const para = document.querySelector('main');
        para.style.color = 'black';
        const image = document.querySelector('img');
        image.setAttribute('src', 'byui-logo-blue.webp');
    }
}           

