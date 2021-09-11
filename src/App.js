import React, {useState} from 'react';
import './App.css';

function App() {
const [value, setValue] = useState('')
const [item, setItem] = useState([])
const additem = ()=>{
  if(value===""){

  }
  else{
  setItem([...item, value ])}
  setValue("")

}
const removeall= ()=>{
  setItem([])
}
const deleteit =(ind)=>{ 
  // console.log(ind)
  const removedone= item.filter((elem, indexed)=>{
return(indexed!==ind)
console.log(indexed)

  })
  setItem(removedone)
  
}
  return (
    <>
     <div className="main">
       <h1 className="logo">ToDo List</h1>
       <div className="inputs">
         <input
         type="text"
         placeholder="Enter your List"
          value={value}
          maxLength="10"
          onChange={(e)=>{
            setValue(e.target.value)
          }}
         />
        <button className="add" onClick={additem}
         >Add</button>
         
       </div>
       <div className="items">
         {item.map((val, index)=>{
           return(<div className="item" key={index}>
           <div >{val}</div>
           <button className="delete" onClick={()=>deleteit(index)}>Delete</button>
           </div>
           )  })}
       </div>
         <button className="remove" onClick={removeall}>Remove All</button>
     </div>
    </>
  );
}

export default App;
