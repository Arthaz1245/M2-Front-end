import React from 'react';
import styled from './SearchBar.module.css';
export default function SearchBar(props) {
  // acá va tu código
  return (  
  <div className={styled.SearchbarForm}>
        <input type="text"placeholder='Ciudad....' className={styled.inputBuscar}/>
        <button onClick={()=>props.onSearch('Buscando ciudad')} className={styled.btnAgregar}>Agregar</button>
  </div>
  
  )
      
    
};