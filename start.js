window.application = {
    level: ''
}

const CONTAINER = document.querySelector('.container');
const LOBBY = document.querySelector('.lobby');
const body = document.querySelector('.center');
let seconds = 0;

function renderLevelScreen(render) {
    body.classList.remove('center');
    body.classList.add('game');

    const firstTop = document.createElement('div');
    firstTop.classList.add('firstTop');

    const SecondTop = document.createElement('div')
    SecondTop.classList.add('secondTop');

    const min = document.createElement('h2');
    min.classList.add('timeStyle');
    min.textContent = 'min';

    const sec = document.createElement('h2');
    sec.classList.add('timeStyle');
    sec.textContent = 'sec';

    const watch = document.createElement('h1');
    watch.classList.add('watchStyle');
    watch.textContent = '00.00';

    const startGame = setInterval(() => {
        seconds += 100;
        const dateTimer = new Date(seconds);
        watch.innerHTML = ('0' + dateTimer.getUTCMinutes()).slice(-2) + '.' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2);
    }, 100);

    const btn = document.createElement('button');
    btn.classList.add('restart');
    btn.textContent = 'Начать заново';
    btn.setAttribute('type', 'submit');

    btn.addEventListener('click', () => {
        location.reload();
    });

    CONTAINER.appendChild(firstTop);
    CONTAINER.appendChild(SecondTop);
    firstTop.appendChild(min);
    firstTop.appendChild(sec);
    SecondTop.appendChild(watch);
    SecondTop.appendChild(btn);
    LOBBY.innerHTML = '';

    const arrCards = ['./cards/рубашка.png', './cards/король пики.png', './cards/дама пики.png', './cards/валет пики.png', './cards/10 пики.png', './cards/9 пики.png',
        './cards/8 пики.png', './cards/7 пики.png', './cards/6 пики.png', './cards/туз черви.png', './cards/король черви.png', './cards/дама черви.png', './cards/валет черви.png',
        './cards/10 черви.png', './cards/9 черви.png', './cards/8 черви.png', './cards/7 черви.png', './cards/6 черви.png', './cards/туз бубны.png', './cards/король бубны.png',
        './cards/дама бубны.png', './cards/валет бубны.png', './cards/10 бубны.png', './cards/9 бубны.png', './cards/8 бубны.png', './cards/7 бубны.png', './cards/6 бубны.png',
        './cards/туз крести.png', './cards/король крести.png', './cards/дама крести.png', './cards/валет крести.png', './cards/10 крести.png', './cards/9 крести.png', './cards/8 крести.png',
        './cards/7 крести.png', './cards/6 крести.png',];

    

    if (render === '1') {
        const cards = document.createElement('div');
        cards.classList.add('cardsStyle');

        arrCards.forEach(i => {
            const img = document.createElement('img');
            img.classList.add('cardsStyle_img');
            img.setAttribute('src', i);
            cards.appendChild(img);
        });

        CONTAINER.appendChild(cards);
    } else if (render === '2') {

        const cards = document.createElement('div');
        cards.classList.add('cardsStyle');

        arrCards.forEach(i => {
            const img = document.createElement('img');
            img.classList.add('cardsStyle_img');
            img.setAttribute('src', i);
            cards.appendChild(img);
        });

        CONTAINER.appendChild(cards);
    } else if (render === '3') {

        const cards = document.createElement('div');
        cards.classList.add('cardsStyle');

        arrCards.forEach(i => {
            const img = document.createElement('img');
            img.classList.add('cardsStyle_img');
            img.setAttribute('src', i);
            cards.appendChild(img);
        });

        CONTAINER.appendChild(cards);
    }
}