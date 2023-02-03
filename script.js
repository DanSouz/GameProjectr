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
        renderLevelScreen('1');
        window.application.level = inputs[0].id
    } else if (document.getElementById('2').checked) {
        renderLevelScreen('2');
        window.application.level = inputs[1].id
    } else if (document.getElementById('3').checked) {
        renderLevelScreen('3');
        window.application.level = inputs[2].id
    }
    console.log(`${window.application.level} уровень`);   
});
