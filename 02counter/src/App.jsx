import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter,setCounter] = useState(15)

  const addValue =()=>{
    setCounter(counter+1);
    console.log("clicked"+counter);
  }
  const removeVal=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value: {counter<0?0: counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeVal}>Remove value</button>
    </>
  )
}

export default App
