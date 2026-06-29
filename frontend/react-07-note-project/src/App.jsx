import { useState } from "react";

function App(){

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  function submit(e){
    e.preventDefault()
    const newTask=[...task];
    newTask.push({title,details})
    
    setTask(newTask)
    console.log({newTask})
    setTitle('')
    setDetails('')
  }
  function del(idx){
    const copy=[...task]
    copy.splice(idx)
    setTask(copy)

  }
  return (
    <div className="flex ">

      <div className="flex h-screen flex-col justify-between p-6 h-2/3 w-1/2 shrink-0">
        <form onSubmit={(e)=> { submit(e)}} className="p-4 flex flex-col justify-between gap-5 bg-gray-900">
          <input 
            type='text' 
            value={title} 
            onChange={(e)=>{setTitle(e.target.value)}} 
            className=" bg-black text-white h-20"
            placeholder="enter note heading" />
          <textarea 
            type='text' 
            value={details} 
            onChange={(e)=>{setDetails(e.target.value)}} 
            className= " bg-black text-white h-40" 
            placeholder="enter details"/>
          <button className= "rounded-4xl bg-gray-800 text-white h-10">Add Note</button>
        </form>
      </div>
      
      <div className=" w-1/2 h-screen p-5 overflow-y-auto">
        <h1 className="text-2xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-10 mt-5 overflow-auto">
          
            {task.map(function(elem,idx){
              return (
              <div key={idx} className="flex flex-col justify-between h-50 w-40 bg-gray-950 text-white gap-10 p-3 rounded-2xl">
                
                <div>
                  <h3 className="text-2xl font-bold">{elem.title}</h3>
                  <p className="text-medium ">{elem.details}</p>
                </div>
                <div>
                  <button onClick={()=>{del(idx)}} className=" w-full bg-gray-800 rounded-full items-center h-7">delete</button>
                </div>
              </div>)
            })}
          


        </div>
      
      </div>
      
    </div>
  )
}

export default App;