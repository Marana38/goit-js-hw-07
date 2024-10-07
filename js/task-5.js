function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
button.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor(event) {
    const body = document.querySelector("body");
    body.style.backgroundColor = getRandomHexColor();
}
button.style.borderRadius = "8px";
button.style.padding = "8px 16px";
button.style.width = "148px";
button.style.height = "40px";
button.style.marginTop = "16px";

