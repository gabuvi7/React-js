// const element = document.createElement('h1');
// element.innerText = 'Hello test';

// const container = document.getElementById('app')

// container.appendChild(element)

import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, Platzi Badges from React!</h1>

const container = document.getElementById('app');

//ReactDOM.render(__que__,__donde__);

ReactDOM.render(element,container);
// prueba

//Siempre que use jsx debo importar react en cada documento.
