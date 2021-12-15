let size = 16;
let items = document.querySelectorAll('.items');
const erase = document.querySelector('#erase');
const random = document.querySelector('#random');
const black = document.querySelector('#black');
const reset = document.querySelector('#reset');
let color = 'black';


function createSquares (number) {
    let div = document.createElement('div');
    const main = document.querySelector('.main');

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    main.setAttribute('style', `grid-template-columns: repeat(${number}, 1fr); grid-template-rows: repeat(${number}, 1fr)`);

    for (i = 0; i < number ** 2; i++) {
        let div = document.createElement('div');
        div.classList.add('items');
        main.appendChild(div);
    }

    let items = document.querySelectorAll('.items');

    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            if (color == 'random') {
            item.setAttribute('style', `background: ${'#'+Math.floor(Math.random()*16777215).toString(16)}`);
            }
            else if (color == 'black') {
                item.setAttribute('style', 'background: black');
            }
            else if (color == 'white') {
                item.setAttribute('style', 'background: white');
            }
        })
    })
    
}

createSquares(size);


random.addEventListener('click', () => {
    color = 'random';
})

black.addEventListener('click', () => {
    color = 'black';
})

erase.addEventListener('click', () => {
    color = 'white';
})

reset.addEventListener('click', () => {
    let size = prompt('Size of board?');
    if (isNaN(Number(size))) {
        window.alert("Not a number");
    }
    else if (Number(size) > 100 || Number(size) < 1) {
        window.alert("Outside of range");
    }
    else {
        createSquares(size);

    }
})
/*
clear.addEventListener('click', () => {
    items.forEach((item) => {
        item.removeAttribute('style');
    });
    color = 'black';
})
*/