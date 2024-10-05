const inputName = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
inputName.addEventListener("input", inputs);
function inputs(event) {
    const name = event.target.value.trim();
    userName.textContent = name ? name : "Anonymous";
}

inputName.addEventListener("focus", () => {
    // console.log("ok");//інпут став активним при фокосі

})
inputName.addEventListener("blur", () => {
    // console.log("ok");// дія виконуєтьсь при втраті фокусу

})