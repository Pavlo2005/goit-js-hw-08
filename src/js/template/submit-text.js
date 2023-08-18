import common from '../../common.json';
import { element } from '../03-feedback';

function submitText(evt) {
    evt.preventDefault();
    console.log(element.email.value);
    console.log(element.message.value);

    element.email.value = '';
    element.message.value = '';

    localStorage.setItem(common.FEADBACK_FORM, JSON.stringify({
        email: '',
        message: ''
    }));
}

export { submitText };