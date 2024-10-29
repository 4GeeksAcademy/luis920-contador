//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";
import Contador from "./component/Contador.jsx";


//render your react application


let sec = 0;

setInterval(() => {

  const uno = Math.floor((sec / 1) % 10);
  const dos = Math.floor((sec / 10) % 10);
  const tres = Math.floor((sec / 100) % 10);
  const cuatro = Math.floor((sec / 1000) % 10);
  const cinco = Math.floor((sec / 10000) % 10);
  const seis = Math.floor((sec / 100000) % 10);
  sec += 1 
  ReactDOM.createRoot(document.getElementById('app')).render(<Contador digitoUno={uno} digitoDos={dos} digitTres={tres} digitoCuatro={cuatro} digitoCinco={cinco} digitoSeis={seis} />);
  
}, 1000);
