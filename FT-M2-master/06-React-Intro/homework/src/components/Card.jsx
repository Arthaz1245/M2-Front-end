import React from 'react';
import styled from './Card.module.css';



export default function Card(props) {
  // acá va tu código

  return <div className={`${styled.cardStyle}`}>

  <btnCerrar  onClick={props.onClose} className ={`${styled.btnClose}`} >X </btnCerrar>
  
      
    <h3>{props.name}</h3>
    <div className = {`${styled.cardInterior}`}>
      <p className = {`${styled.spacing}`}>min max</p> 
      <p className = {`${styled.spacing}`}>{props.min}  {props.max}</p> 
    </div>
    
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png `} alt="img" ></img>
   

  </div>
};