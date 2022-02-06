import React from 'react';
import reactDOM from 'react-dom';


const saludo = <h1>Hola Mundo</h1>;
const divRoot = document.querySelector('#root');

// console.log(divRoot);
reactDOM.render( saludo, divRoot);