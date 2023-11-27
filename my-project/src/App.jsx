import { useState } from "react"


function App() {
  const [color,setColor]= useState("olive");
  let changeRed=()=>{
    setColor("red");
  }
  let changeGreen=()=>{
    setColor("green");
  }
  let changeBlue=()=>{
    setColor("blue");
  }
  let changePink=()=>{
    setColor("pink");
  }
  let changeViolet=()=>{
    setColor("violet");
  }
  let changeGray=()=>{
    setColor("gray");
  }
  let changeBlack=()=>{
    setColor("black");
  }
  return (
    <>
      <div className="w-full h-screen duration-200 flex justify-center" style={{background: color}}>
        <div className="fixed flex-wrap bottom-12 justify-center px-2 rounded-3xl">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl p-2">
            <button className="outline-none px-4 rounded-3xl" onClick={changeRed} style={{background: "red", color: "#fff"}}>Red</button>
            <button className="outline-none px-4 rounded-3xl" onClick={changeGreen} style={{background: "green", color: "#fff"}}>Green</button>
            <button className="outline-none px-4 rounded-3xl" onClick={changeBlue} style={{background: "blue", color: "#fff"}}>Blue</button>
            <button className="outline-none px-4 rounded-3xl" onClick={changePink} style={{background: "pink", color: "#000"}}>Pink</button>
            <button className="outline-none px-4 rounded-3xl" onClick={changeViolet} style={{background: "violet", color: "#fff"}}>Violet</button>
            <button className="outline-none px-4 rounded-3xl" onClick={changeGray} style={{background: "gray", color: "#fff"}}>Gray</button>
            <button className="outline-none px-4 rounded-3xl" onClick={changeBlack} style={{background: "black", color: "#fff"}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
