import './App.css';

import ColorBlock from './ColorBlock';

//Require react and useState
import React, { useState } from 'react'
import ColorForm from './ColorForm';

function App() {

  //JavaScript JSX is done before the return statement
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green',
    'greenyellow', 'yellow', 'orange', 'red'])

  let colorMap = colors.map((color, i) => {

    return (
      <ColorBlock key={i} color={color} />
    )
  })

  const addColor = (newColor) => {
setColors([...colors, newColor])


  }

  return (
    <div className="App">
      {colorMap}

      <ColorForm addColor={addColor}/>

    </div>
  )
}

export default App;