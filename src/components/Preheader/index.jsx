import React,{useState} from "react";
import {Link} from "react-router-dom";

import "./index.css";

const Preheader = () => {
    return(
        <div className="fon__img">
           <h1 className="fon__text">Человек с камерой</h1>
           <p className="fon__author">Фотограф Илья Обрынин</p> 
        </div>
        
    )
}

export default Preheader;