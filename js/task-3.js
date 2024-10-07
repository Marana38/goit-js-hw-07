const inputName = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
inputName.addEventListener("input", inputs);
function inputs(event) {
    const name = event.target.value.trim();
    userName.textContent = name ? name : "Anonymous";
}
