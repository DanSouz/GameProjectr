const CONTAINER = document.querySelector('.container');
const LOBBY = document.querySelector('.lobby');

function renderFirstLevelScreen() {
    const btn = document.createElement('button');
    btn.classList.add('restart');
    btn.textContent = 'Начать заново';
    btn.setAttribute('type', 'submit');

    btn.addEventListener('click', () => {
        location.reload();
    });

    CONTAINER.appendChild(btn);
    LOBBY.innerHTML = '';
}

function renderSecondLevelScreen() {
    const btn = document.createElement('button');
    btn.classList.add('restart');
    btn.textContent = 'Начать заново';
    btn.setAttribute('type', 'submit');

    btn.addEventListener('click', () => {
        location.reload();
    });

    CONTAINER.appendChild(btn);
    LOBBY.innerHTML = '';
}

function renderThirdLevelScreen() {
    const btn = document.createElement('button');
    btn.classList.add('restart');
    btn.textContent = 'Начать заново';
    btn.setAttribute('type', 'submit');

    btn.addEventListener('click', () => {
        location.reload();
    });

    CONTAINER.appendChild(btn);
    LOBBY.innerHTML = '';
}