import React, { useState } from 'react';
import './App.css';
import Options from './Options.js'

function App() {

  const [options, setOption] = useState([
    {
      count : 0,
      name : 'Tesla modleX',
      year : '$142,090',
      image : require('./images/1.jpg'),
      userImage : 'http://placekitten.com/100/100'
    },
    {
      count : 0,
      name : 'Tesla Roadster',
      year : '$322,000',
      image : require('./images/2.jpg'),
      userImage : 'http://placekitten.com/100/100'
    },
    {
      count : 0,
      name : 'Dodge Hellcat',
      year : '$33,845',
      image : require('./images/3.jpeg'),
      userImage : 'http://placekitten.com/100/100'
    },
    {
      count : 0,
      name : 'Mercedes G wagon',
      year : '$147,900',
      image : require('./images/4.jpg'),
      userImage : 'http://placekitten.com/100/100'
    }
  ]);

  const resetCountandSort = (name) => {
    const newOptions = [];

    options.map(ele => {
      if (ele.name === name) {
        ele.count++;
      }
      newOptions.push(ele);
    })
    newOptions.sort((a,b) => b.count - a.count);
    setOption(newOptions);
  }

  return (
    <div className="App">

      <h1>Popular Cars In The World</h1>
      {
        options.map((ele, index) => <Options resetCountandSort = {resetCountandSort}key = {index} option = {ele}/>)
      }
    </div>
  );
}

export default App;
