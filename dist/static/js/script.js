/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".check");

btn.disabled = true;

// eslint-disable-next-line arrow-parens
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    btn.disabled = false;
  });
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (document.getElementById("1").checked) {
    renderLevelScreen("1");
    renderCardsScreen("3");
    window.application.level = inputs[0].id;
  } else if (document.getElementById("2").checked) {
    renderLevelScreen("2");
    renderCardsScreen("6");
    window.application.level = inputs[1].id;
  } else if (document.getElementById("3").checked) {
    renderLevelScreen("3");
    renderCardsScreen("9");
    window.application.level = inputs[2].id;
  }
});
