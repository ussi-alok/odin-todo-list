import './style.css';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    btn.classList.add("myButton");
    btn.innerText="Click me ";
    btn.onclick = printMe;

    element.appendChild(btn);
    
    return element;
}
  
document.body.appendChild(component());