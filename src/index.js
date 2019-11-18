import moment from 'moment';

function theTime() {
    const el = document.createElement('h1');
    el.innerHTML = moment().format('YYYY-MM-DDTHH:mm:ssZ');

    return el;
}

document.body.appendChild(theTime());