const btn = document.querySelector('.btn');
const inputs = document.querySelectorAll('.check');

btn.disabled = true;

inputs.forEach(input => {
    input.addEventListener('click', () => {
        btn.disabled = false;
    });
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.getElementById('1').checked) {
        renderFirstLevelScreen();
    } else if (document.getElementById('2').checked) {
        renderSecondLevelScreen()
    } else if (document.getElementById('3').checked) {
        renderThirdLevelScreen()
    }
});