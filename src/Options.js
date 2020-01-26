import React, { useState } from 'react';
import './App.css';

function Option (props) {

  const getOptionName = (e) => { 
    let name = e.target.name;
    props.resetCountandSort(name);
  }

  return (
    <div className="options">
      
      <div> 
        <img className = 'optionImage' src = {props.option.image}/>
      </div> 
      <div className = 'details'> 

        <div><button name = {props.option.name}  onClick = {e => getOptionName(e)}>click</button> <span className = 'counter'>{props.option.count}</span></div>
        <p className = 'optionName'>{props.option.name}</p>
        <p>{props.option.year}</p>

        <div className = 'userBox'> 
          <p>Submitted by:</p>
          <img className = 'userImage' src = {props.option.userImage}/>
        </div>
        
      </div>  
      
    </div>
  );
}

export default Option;