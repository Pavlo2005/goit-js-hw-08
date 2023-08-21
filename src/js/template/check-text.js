import common from '../../common.json';

function checkText(evt) {
    const savedText = JSON.parse(localStorage.getItem(common.FEADBACK_FORM)) ??  {
        email: '',
        message: ''
    };
    
    if (evt.target.classList.contains('email-js')) {
        savedText.email = evt.target.value;
    }

    if (evt.target.classList.contains('message-js')) {
        savedText.message = evt.target.value;
    }

    localStorage.setItem(common.FEADBACK_FORM, JSON.stringify(savedText));
}

export { checkText };