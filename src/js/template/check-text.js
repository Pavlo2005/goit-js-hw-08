import common from '../../common.json';

const feadbackForm = JSON.parse(localStorage.getItem(common.FEADBACK_FORM)) ??  {
    email: '',
    message: ''
};

function checkText(evt) {
    if (evt.target.classList.contains('email-js')) {
        feadbackForm.email = evt.target.value;
    }

    if (evt.target.classList.contains('message-js')) {
        feadbackForm.message = evt.target.value;
    }

    localStorage.setItem(common.FEADBACK_FORM, JSON.stringify(feadbackForm));
}

export { checkText };