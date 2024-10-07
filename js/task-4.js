
const forma = document.querySelector(".login-form")
forma.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault()
    const elements = event.currentTarget.elements;
    // console.log(elements.email.value);

    // console.dir(event.currentTarget);
    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    }
    if (info.email === "" || info.password === "") {
        alert(`All form fields must be filled in`);

        return;
    };
    event.target.reset();

    console.log(info);
};


