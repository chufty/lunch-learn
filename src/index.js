import moment from 'moment';

function theTime() {
    const el = document.createElement('h1');
    el.innerHTML = moment().format();

    return el;
}

document.body.appendChild(theTime());