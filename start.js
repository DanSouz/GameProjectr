const CONTAINER = document.querySelector('.container');
const LOBBY = document.querySelector('.lobby');

function renderFirstLevelScreen() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Уровень 1';
    h1.classList.add('title');

    const btn = document.createElement('button');
    btn.classList.add('restart');
    btn.textContent = 'Начать заново';
    btn.setAttribute('type', 'submit');

    btn.addEventListener('click', () => {
        location.reload();
    });

    CONTAINER.appendChild(h1);
    CONTAINER.appendChild(btn);
    LOBBY.innerHTML = '';
}

function renderSecondLevelScreen() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Уровень 2';
    h1.classList.add('title');

    const btn = document.createElement('button');
    btn.classList.add('restart');
    btn.textContent = 'Начать заново';
    btn.setAttribute('type', 'submit');

    btn.addEventListener('click', () => {
        location.reload();
    });

    CONTAINER.appendChild(h1);
    CONTAINER.appendChild(btn);
    LOBBY.innerHTML = '';
}

function renderThirdLevelScreen() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Уровень 3';
    h1.classList.add('title');

    const btn = document.createElement('button');
    btn.classList.add('restart');
    btn.textContent = 'Начать заново';
    btn.setAttribute('type', 'submit');

    btn.addEventListener('click', () => {
        location.reload();
    });

    CONTAINER.appendChild(h1);
    CONTAINER.appendChild(btn);
    LOBBY.innerHTML = '';
}