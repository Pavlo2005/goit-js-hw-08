import common from '../common.json';
import { checkText } from './template/check-text';
import { submitText } from './template/submit-text';
import throttle from 'lodash.throttle';

const input = document.querySelector('.feedback-js');

const element = {
    email: document.querySelector('.email-js'),
    message: document.querySelector('.message-js')
}

const savedText = JSON.parse(localStorage.getItem(common.FEADBACK_FORM)) ??  {
    email: '',
    message: ''
};

element.email.value = savedText.email;

element.message.value = savedText.message;

input.addEventListener('input', throttle(checkText, 500));

input.addEventListener('submit', submitText);

export { element };