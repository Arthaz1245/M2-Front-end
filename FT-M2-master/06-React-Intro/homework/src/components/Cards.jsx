import React from 'react';
import Card from './Card.jsx';
import styled from './Cards.module.css';
//import data, {cities} from '\src\data.js';
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map


  if(!props.cities){
    return <h1>No ciudades disponibles</h1>
  }
  return <div className={`${styled.CardsDirection}`}>
     {
          
         props.cities && props.cities.map(city => (
        <div >
      <Card
       
          key = {city.id} 
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
      />
      </div>
          ))
          
          
     }

  </div>
};