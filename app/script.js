const submitBtn = document.querySelector('.newsletter__submit');
const inputField = document.querySelector('.newsletter__input');
const formErr = document.querySelector('.newsletter__formErr');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputContent = inputField.value

    if (inputContent.includes('@')) {
        formErr.classList.add('-hidden')
        inputField.classList.remove('-errState')
    } else {
        inputField.classList.add('-errState')
        formErr.classList.remove('-hidden')
    }
})