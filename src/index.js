require('./game.js');

function createComponent() {
    const elem = document.createElement('h1');
    elem.innerHTML = "Conway's life";
    return elem;
}

document.body.appendChild(createComponent());