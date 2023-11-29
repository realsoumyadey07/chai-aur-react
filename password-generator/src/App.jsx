import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  //useState Hooks
  const [copy, setCopy] = useState("copy")
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef hook
  const passwordRef= useRef(null)

  //useCallback hook

  // ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str+= "0123456789";
    if (charAllowed) str+= "~!@#$%^&*_-+=`";
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()* str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    setCopy("copid");
    setTimeout(()=>{
      setCopy("copy")
    },2000)
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password,copy])
  
  //useEffect hook
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword])

  


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-300 bg-gray-700'>
      <h1 className="text-white text-center my-2">Password Genetator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='text-white bg-blue-700 px-3 hover:bg-blue-800' onClick={copyPasswordToClipboard}>{copy}</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input type="range"
             min={8}
              max={100} 
             value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>Lenght: {length}</label>
             <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=> !prev)}} />
             <label>Numbers</label>
             <input type="checkbox" onChange={()=>{setCharAllowed((prev)=>!prev)}} />
             <label >Character</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
