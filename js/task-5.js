function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const colorValueSpan = document.querySelector(".color")
const button = document.querySelector(".change-color");
button.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor(event) {
    const randomColor = getRandomHexColor()
    const body = document.querySelector("body");
    body.style.backgroundColor = randomColor;
    colorValueSpan.textContent = randomColor;
    console.log(randomColor);

}
button.style.borderRadius = "8px";
button.style.padding = "8px 16px";
button.style.width = "148px";
button.style.height = "40px";
button.style.marginTop = "16px";

