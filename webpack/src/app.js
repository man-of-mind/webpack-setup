import style from './index.css';
import _ from 'lodash';
import component from './component.js';

function element() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(element());
document.body.append(component())

console.log("hello, webpack");