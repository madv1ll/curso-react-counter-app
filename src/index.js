import React from 'react';
import reactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


const divRoot = document.querySelector('#root');

// console.log(divRoot);
// console.log(CounterApp)
reactDOM.render( <CounterApp value={32323} /> , divRoot);