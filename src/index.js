import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./ui/halfmoon.css"

import { GlobalHotKeys } from "react-hotkeys";
import App from './App';


import reportWebVitals from './reportWebVitals';



const keyMap = { SHOW_ALL_HOTKEYS: ["o+p", "."] };
const handlers = { SHOW_ALL_HOTKEYS: () => alert("hello") };


ReactDOM.render(
  <React.StrictMode>
    <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(myc, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
