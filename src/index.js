import moment from 'moment';

function theTime() {
    const el = document.createElement('h1');
    el.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

    return el;
}

document.body.appendChild(theTime());