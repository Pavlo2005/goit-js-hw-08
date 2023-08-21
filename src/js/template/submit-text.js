import common from '../../common.json';
import { element } from '../03-feedback';

function submitText(evt) {
    evt.preventDefault();

    if (element.email.value && element.message.value) {

        console.log(`email: ${element.email.value}, message: ${element.message.value}`);

        element.email.value = '';
        element.message.value = '';

        localStorage.setItem(common.FEADBACK_FORM, JSON.stringify({
            email: '',
            message: ''
        }));
    } else {
        alert("All fields must be filled in");
    }
}

export { submitText };