
import { useState,useEffect } from 'react';

export default function Hooks() {
   
    const [name, setName] = useState("Ram");
    let myStyle = {
        color: "black",
        backgroundColor: "white"
    }
    const change =(()=>{
        if(name==='Ram')
        setName("Sita");
        else{
            setName("Ram");
        }
    })
    useEffect(()=>{
        if(myStyle.backgroundColor ==="black"){
        const myStyle ={
            color: "red",
            backgroundColor: "blue"
        }
    }
    else{
        const myStyle =({
            color: "black",
            backgroundColor: "white"
        })
    }
    })
  return (
    <div  className='container'>
        <h1 style={myStyle}>your name is {name}</h1>
        <button className='btn btn-primary' onClick={change}>Click</button>
      
    </div>
  )
}
