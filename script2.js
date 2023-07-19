const dark = document.querySelector("body");
const formDark = document.querySelector(".form");
const textDark = document.querySelector(".form-text");
const btnDark = document.querySelector(".tema button");


btnDark.addEventListener("click", () => {
    dark.classList.toggle("dark");
    textDark.classList.toggle("dark");
});
