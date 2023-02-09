/* eslint-disable prettier/prettier */
window.application = {
  level: '',
};

const CONTAINER = document.querySelector('.container');
const LOBBY = document.querySelector('.lobby');
const body = document.querySelector('.center');
let seconds = 0;

// function renderCardsScreen(number) {
//   const arrCards = ['./cards/туз пики.png', './cards/король пики.png', './cards/дама пики.png', './cards/валет пики.png', './cards/10 пики.png', './cards/9 пики.png',
//     './cards/8 пики.png', './cards/7 пики.png', './cards/6 пики.png', './cards/туз черви.png', './cards/король черви.png', './cards/дама черви.png', './cards/валет черви.png',
//     './cards/10 черви.png', './cards/9 черви.png', './cards/8 черви.png', './cards/7 черви.png', './cards/6 черви.png', './cards/туз бубны.png', './cards/король бубны.png',
//     './cards/дама бубны.png', './cards/валет бубны.png', './cards/10 бубны.png', './cards/9 бубны.png', './cards/8 бубны.png', './cards/7 бубны.png', './cards/6 бубны.png',
//     './cards/туз крести.png', './cards/король крести.png', './cards/дама крести.png', './cards/валет крести.png', './cards/10 крести.png', './cards/9 крести.png', './cards/8 крести.png',
//     './cards/7 крести.png', './cards/6 крести.png'];

//   // eslint-disable-next-line no-unused-vars
//   const cardDeck = [];

//   const cards = document.createElement('div');
//   cards.classList.add('cardsStyle');

//   for (let i = 0; i < number; i++) {
//     cardDeck[i] = arrCards[Math.round(Math.random() * 35)];
//   };

//   const uniqueCards = cardDeck.filter((element, index) => {
//     return cardDeck.indexOf(element) === index;
//   });

//   // eslint-disable-next-line no-unused-vars, no-inner-declarations
//   const doubleCards = cardDeck.concat(uniqueCards);
//   doubleCards.sort(() => Math.random() - 0.5);

//   doubleCards.forEach(i => {
//     const img = document.createElement('img');
//     img.classList.add('cardsStyle_img');
//     img.setAttribute('src', i);
//     cards.appendChild(img);
//   });

//   CONTAINER.appendChild(cards);

//   console.log(cardDeck);
//   console.log(uniqueCards);
//   console.log(doubleCards);
// }

function renderCardsScreen(number) {
  const arrCards = ['./static/cards/туз пики.png', './static/cards/король пики.png', './static/cards/дама пики.png', './static/cards/валет пики.png', './static/cards/10 пики.png', './static/cards/9 пики.png',
    './static/cards/8 пики.png', './static/cards/7 пики.png', './static/cards/6 пики.png', './static/cards/туз черви.png', './static/cards/король черви.png', './static/cards/дама черви.png', './static/cards/валет черви.png',
    './static/cards/10 черви.png', './static/cards/9 черви.png', './static/cards/8 черви.png', './static/cards/7 черви.png', './static/cards/6 черви.png', './static/cards/туз бубны.png', './static/cards/король бубны.png',
    './static/cards/дама бубны.png', './static/cards/валет бубны.png', './static/cards/10 бубны.png', './static/cards/9 бубны.png', './static/cards/8 бубны.png', './static/cards/7 бубны.png', './static/cards/6 бубны.png',
    './static/cards/туз крести.png', './static/cards/король крести.png', './static/cards/дама крести.png', './static/cards/валет крести.png', './static/cards/10 крести.png', './static/cards/9 крести.png', './static/cards/8 крести.png',
    './static/cards/7 крести.png', './static/cards/6 крести.png'];


  // eslint-disable-next-line no-unused-vars
  const cardDeck = [];

  const cards = document.createElement('div');
  cards.classList.add('cardsStyle');

  for (let i = 0; i < number; i++) {
    cardDeck[i] = arrCards[Math.floor(Math.random() * (arrCards.length - 1))];
  };

  const uniqueCards = cardDeck.filter((element, index) => {
    return cardDeck.indexOf(element) === index;
  });

  // eslint-disable-next-line no-unused-vars, no-inner-declarations
  const doubleCards = cardDeck.concat(uniqueCards);
  doubleCards.sort(() => Math.random() - 0.5);

  doubleCards.forEach(i => {
    const toolCard = document.createElement('div');
    toolCard.classList.add('toolCard');
    const img = document.createElement('img');
    img.classList.add('cardsStyle_img');
    img.setAttribute('src', i);
    toolCard.appendChild(img);
    cards.appendChild(toolCard);

    const timerBack = setInterval(() => {

      const imgBack = document.createElement('img');
      imgBack.classList.add('cardsStyle_backImg');
      imgBack.setAttribute('src', './static/cards/рубашка.png');
      toolCard.appendChild(imgBack);
      cards.appendChild(toolCard);

      clearInterval(timerBack);
    }, 5000);
  });

  CONTAINER.appendChild(cards);

  console.log(cardDeck);
  console.log(uniqueCards);
  console.log(doubleCards);
}

// eslint-disable-next-line no-unused-vars
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

  setInterval(() => {
    seconds += 100;
    const dateTimer = new Date(seconds);
    watch.innerHTML = `${(`0${dateTimer.getUTCMinutes()}`).slice(-2)}.${(`0${dateTimer.getUTCSeconds()}`).slice(-2)}`;
  }, 100);

  const btn = document.createElement('button');
  btn.classList.add('restart');
  btn.textContent = 'Начать заново';
  btn.setAttribute('type', 'submit');

  btn.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });

  CONTAINER.appendChild(firstTop);
  CONTAINER.appendChild(SecondTop);
  firstTop.appendChild(min);
  firstTop.appendChild(sec);
  SecondTop.appendChild(watch);
  SecondTop.appendChild(btn);
  LOBBY.innerHTML = '';

  if (render === '1') {
    renderCardsScreen();
  } else if (render === '2') {
    renderCardsScreen();
  } else if (render === '3') {
    renderCardsScreen();
  }
}