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
const clear = document.querySelector('#clear');
const random = document.querySelector('#random');
let color = 'black';

random.addEventListener('click', () => {
    color = 'random';
})

items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        if (color == 'random') {
        item.setAttribute('style', `background: ${'#'+Math.floor(Math.random()*16777215).toString(16)}`);
        }
        else {
            item.setAttribute('style', 'background: black');
        }
    })
})


clear.addEventListener('click', () => {
    items.forEach((item) => {
        item.removeAttribute('style');
    });
    color = 'black';
})

