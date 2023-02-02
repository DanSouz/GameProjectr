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
        window.level = {
            level: inputs[0].id
        };
        window.renderFirstLevelScreen();
    } else if (document.getElementById('2').checked) {
        window.level = {
            level: inputs[1].id
        };
        window.renderSecondLevelScreen();
    } else if (document.getElementById('3').checked) {
        window.level = {
            level: inputs[2].id
        };
        window.renderThirdLevelScreen();
    }
    console.log(`${window.level.level} уровень`);
});