const submitBtn = document.querySelector('.newsletter__submit');
const inputField = document.querySelector('.newsletter__input');
const formErr = document.querySelector('.newsletter__formErr');
const sectionMain = document.querySelector('.newsletter__wrapper');
const sectionTy = document.querySelector('.newsletter__tyScreen');
const dismissBtn = document.querySelector('.-dismissBtn');

const emailToSent = document.querySelector('.newsletter__email');

sectionTy.classList.add('-hidden')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputContent = inputField.value

    if (inputContent.includes('@') && inputContent.length > 3) {
        formErr.classList.add('-hidden')
        inputField.classList.remove('-errState')
        sectionMain.classList.add('-hidden')
        sectionTy.classList.remove('-hidden')
        emailToSent.textContent = inputContent;
    } else {
        inputField.classList.add('-errState')
        formErr.classList.remove('-hidden')
    }

    
})

dismissBtn.addEventListener('click', () => {
    sectionMain.classList.remove('-hidden')
    sectionTy.classList.add('-hidden')
})