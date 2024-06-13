
// usestate hooks: it is used to simply manage your state{data} in functional componenst.
// import useState from 'react'
// declare hooks at top level
// usestate= variable , updating function
// const count = usestate(initial value)
//import { useState } from 'react'; 
import { useState } from 'react';
import './App.css'
function App() {
  // const [count, setCount] = useState(0);
  // function inc(){
  //   setCount(count+1);
  // }
  // function dec(){
  //   setCount(count-1);
  // }
  const [list , setList] = useState([]);
  const [newtask, setNewtask] = useState("");
  console.log(list)
  const newip=(e)=>{
    setNewtask(e.target.value)
  }
  const addtask=()=>{
    setList([...list, newtask])
    setNewtask("")
  }
  const updateTask=(e,i)=>{
    const uptask = [...list];
    uptask.splice(i,1,e.target.value);
    setList(uptask);
  }
  const deletetask=(i)=>{
    const deltask= [...list];
    deltask.splice(i,1);
    setList(deltask);
  }
  return (
     // <center>
    //   <h1>Counter: {count}</h1>
    //   <button onClick={inc}>Increment</button>
    //   <button onClick={dec}>Decrement</button>
    // </center>
    <div className='App'>
      <h1 className='heading'><b>To Do App</b></h1>
      <div className='inputs'>
       <input type="text" onChange={(e)=>{newip(e)}} value={newtask}></input>
       <button className='btn' onClick={addtask}>Add Task👆</button>
      </div>
      <div className='container'>
        {
          list.map((val)=>{
            return(
              <div className='list'>
                <input type='text' value={val} onChange={(e,i)=>{updateTask(e,i)}}></input>
                <span className='icon' onClick={(i)=>{deletetask(i)}}>🚮</span>
              </div>
            )
          })
        }
        
      </div>
    </div>
  );
}
export default App;
