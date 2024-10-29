//import react into the bundle
import React from 'react';
import PropTypes from 'prop-types';



export function Timer({digitouno,digitodos,digitotres,digitocuatro,digitocinco,digitoseis}){
    return (
    <div className="Container">
        <div className="Icon">
            <i className="far fa-clock"></i>
        </div>
        <div className="seis">{digitoseis % 10}</div>
        <div className="cinco">{digitocinco % 10}</div>
        <div className="cuatro">{digitocuatro % 10}</div>
        <div className="tres">{digitotres % 10}</div>
        <div className="dos">{digitodos % 10}</div>
        <div className="uno">{digitouno % 10}</div>
    </div>);
}
Timer.propTypes = {
  digitoseis: PropTypes.number,
  digitocinco: PropTypes.number,
  digitocuatro: PropTypes.number,
  digitotres: PropTypes.number,
  digitodos: PropTypes.number,
  digitouno: PropTypes.number
};

let counter = 0;
setInterval(function() {
    counter++;
    const seis = Math.floor(counter / 100000) % 10;
    const cinco = Math.floor(counter / 10000) % 10;
    const cuatro = Math.floor(counter / 1000) % 10;
    const tres = Math.floor(counter / 100) % 10;
    const dos = Math.floor(counter / 10) % 10;
    const uno = counter % 10;
    console.log(seis,cinco,cuatro,tres,dos,uno)
    
    
}, 1000);
