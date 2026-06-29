import { useState } from "react";
function App(){
  const [num, setnum] = useState(10)
  function changeIn(){
    setnum(num+1)
    console.log(num)
  }
   function changeDe(){
    setnum(num-1)
    console.log(num)
  }
  return (
    <div className="app">
      <p>hello world <span>{num}</span> </p> 
      <div className="buttons">
        <button onClick={changeIn}> Increase</button>
        <button onClick={changeDe}> Decrease</button>
      </div>
      

    </div>
  )

}

export default App;