import React from "react";

const Contador = ({ digitoUno, digitoDos, digitTres, digitoCuatro, digitoCinco, digitoSeis })=>{


    return(
        <>
        <div className="row d-flex justify-content-evenly py-4 bg-white px-5">
            <div className="">
               <h1 className="text-center mb-5">Seconds Counter </h1>
            </div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-primary rounded ">{digitoSeis}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-primary rounded ">{digitoCinco}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-primary rounded ">{digitoCuatro}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-primary rounded ">{digitTres}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-primary rounded ">{digitoDos}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-primary rounded ">{digitoUno}</div>
        </div>
        </>
    )
}

export default Contador;