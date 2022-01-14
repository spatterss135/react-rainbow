import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import NewColor from './NewColor';

function App(){
    let [colors, setColor] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
    function addColor(e) {
      e.preventDefault()
      let newColor = e.target.getAttribute('input')
      setColor([...colors, newColor])
      console.log(colors)
    }
    let allColors = colors.map((data, i)=> {
      return(
        <ColorBlock key={i} color={data} /> 
      )
    })
    return (
        <div className="App">
          {allColors}
          <NewColor addColor={addColor}/>
        </div>
    )
}
export default App;
