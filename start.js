window.application = {
    level: ''
}

const CONTAINER = document.querySelector('.container');
const LOBBY = document.querySelector('.lobby');

function renderLevelScreen(render) {
    const btn = document.createElement('button');
    btn.classList.add('restart');
    btn.textContent = 'Начать заново';
    btn.setAttribute('type', 'submit');

    btn.addEventListener('click', () => {
        location.reload();
    });

    CONTAINER.appendChild(btn);
    LOBBY.innerHTML = '';

    if (render === '1') {
        
    } else if (render === '2') {

    } else if (render === '3') {

    }
}