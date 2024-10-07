function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes")
let firstBoxes = 30;



createBtn.addEventListener("click", createMarkup);
destroyBtn.addEventListener("click", () => {
    input.value = ""
    destroyBoxes();
})
function createMarkup(event) {
    if (input.value < 1 || input.value > 100) {
        return;
    }
    createBoxes(input.value)
}
function destroyBoxes() {
    boxesContainer.innerHTML = "";
    firstBoxes = 30;
}
function createBoxes(amaunt) {
    destroyBoxes();
    boxesContainer.innerHTML = "";
    firstBoxes = 30;

    for (let i = 0; i < amaunt; i++) {
        const box = document.createElement("div");
        box.style.width = `${firstBoxes}px`;
        box.style.height = `${firstBoxes}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.append(box);
        firstBoxes += 10;
    }
}