//! React 18
// import React from 'react';
// import ReactDOM from 'react-dom/';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

//! React 17
import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
render(<App />, root);

//? Aqui actualizamos en el package.json la version de react y react-dom de la 18 a la 17.0.2