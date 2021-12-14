let size = 16;

function createSquares (number) {
    let div = document.createElement('div');
    const main = document.querySelector('.main');

    main.setAttribute('style', 'grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr)');

    for (i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.classList.add('items');
        main.appendChild(div);
    }

}

createSquares(16);

const items = document.querySelectorAll('.items');
const button = document.querySelector('button');


items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('filled');
    })
})

button.addEventListener('click', () => {
    items.forEach((item) => {
        item.classList.remove('filled');
    });
})
