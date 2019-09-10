// const element = document.createElement('h1');
// element.innerText = 'Hello test';

// const container = document.getElementById('app')

// container.appendChild(element)

import React from 'react';
import ReactDOM from 'react-dom';

import Badges from './Components/Badges';

import 'bootstrap/dist/css/bootstrap.css'; 
import './global.css';

const container = document.getElementById('app');

ReactDOM.render(<Badges />,container);

//Siempre que use jsx debo importar react en cada documento.
